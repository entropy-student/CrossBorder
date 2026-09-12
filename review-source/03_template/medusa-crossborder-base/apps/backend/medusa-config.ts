import { loadEnv, defineConfig, MedusaError } from '@medusajs/framework/utils'
import { validatePayPalEnvironment } from "./src/modules/paypal/config"
import { validateProductionEnvironment } from "./src/config/production"

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

validatePayPalEnvironment(process.env)
const productionEnvironment = validateProductionEnvironment(process.env)
const paypalProviderEnabled = process.env.PAYPAL_PROVIDER_ENABLED?.toLowerCase() === "true"
const productionInfrastructureEnabled = process.env.MEDUSA_PRODUCTION_INFRASTRUCTURE_ENABLED?.toLowerCase() === "true"

const requireProductionValue = (name: string) => {
  const value = process.env[name]?.trim()
  if (!value) throw new MedusaError(MedusaError.Types.INVALID_DATA, `${name} is required when MEDUSA_PRODUCTION_INFRASTRUCTURE_ENABLED=true.`)
  return value
}

const productionInfrastructureModules = productionInfrastructureEnabled
  ? (() => {
      const redisUrl = requireProductionValue("REDIS_URL")
      if (!redisUrl.startsWith("rediss://")) throw new MedusaError(MedusaError.Types.INVALID_DATA, "REDIS_URL must use native TLS rediss:// in production.")
      const cacheRedisUrl = process.env.CACHE_REDIS_URL?.trim() || redisUrl
      const eventsRedisUrl = process.env.EVENTS_REDIS_URL?.trim() || redisUrl
      const lockingRedisUrl = process.env.LOCKING_REDIS_URL?.trim() || redisUrl
      const workflowRedisUrl = process.env.WORKFLOW_REDIS_URL?.trim() || redisUrl
      for (const [name, value] of [["CACHE_REDIS_URL", cacheRedisUrl], ["EVENTS_REDIS_URL", eventsRedisUrl], ["LOCKING_REDIS_URL", lockingRedisUrl], ["WORKFLOW_REDIS_URL", workflowRedisUrl]]) {
        if (!value.startsWith("rediss://")) throw new MedusaError(MedusaError.Types.INVALID_DATA, `${name} must use native TLS rediss:// in production.`)
      }
      const endpoint = requireProductionValue("S3_ENDPOINT")
      const bucket = requireProductionValue("S3_BUCKET")
      const accessKeyId = requireProductionValue("S3_ACCESS_KEY_ID")
      const secretAccessKey = requireProductionValue("S3_SECRET_ACCESS_KEY")
      const region = process.env.S3_REGION?.trim() || "auto"
      const fileUrl = requireProductionValue("S3_PUBLIC_URL")
      if (!endpoint.startsWith("https://") || !fileUrl.startsWith("https://")) throw new MedusaError(MedusaError.Types.INVALID_DATA, "S3_ENDPOINT and S3_PUBLIC_URL must use HTTPS in production.")
      if (fileUrl.includes("r2.dev")) throw new MedusaError(MedusaError.Types.INVALID_DATA, "S3_PUBLIC_URL must use the verified production custom media domain, not r2.dev.")
      return [
        {
          resolve: "@medusajs/medusa/caching",
          options: { providers: [{ resolve: "@medusajs/caching-redis", id: "caching-redis", is_default: true, options: { redisUrl: cacheRedisUrl } }] },
        },
        { resolve: "@medusajs/medusa/event-bus-redis", options: { redisUrl: eventsRedisUrl } },
        { resolve: "@medusajs/medusa/workflow-engine-redis", options: { redis: { redisUrl: workflowRedisUrl } } },
        {
          resolve: "@medusajs/medusa/locking",
          options: { providers: [{ resolve: "@medusajs/medusa/locking-redis", id: "locking-redis", is_default: true, options: { redisUrl: lockingRedisUrl } }] },
        },
        {
          resolve: "@medusajs/medusa/file",
          options: {
            providers: [{
              resolve: "@medusajs/file-s3",
              id: "file-s3",
              is_default: true,
              options: {
                file_url: fileUrl,
                access_key_id: accessKeyId,
                secret_access_key: secretAccessKey,
                region,
                bucket,
                endpoint,
                acl: false,
                additional_client_config: { forcePathStyle: true },
              },
            }],
          },
        },
      ]
    })()
  : []

const paypalModules = paypalProviderEnabled
  ? {
      modules: [
        {
          resolve: "./src/modules/paypal-reconciliation",
        },
        {
          resolve: "@medusajs/medusa/payment",
          options: {
            providers: [
              {
                resolve: "./src/modules/paypal",
                id: "paypal",
                options: {
                  enabled: true,
                  environment: process.env.PAYPAL_ENVIRONMENT || "sandbox",
                  client_id: process.env.PAYPAL_CLIENT_ID,
                  client_secret: process.env.PAYPAL_CLIENT_SECRET,
                  webhook_id: process.env.PAYPAL_WEBHOOK_ID,
                  return_url: process.env.PAYPAL_RETURN_URL,
                  cancel_url: process.env.PAYPAL_CANCEL_URL,
                  auto_capture: false,
                  payment_intent: "AUTHORIZE",
                },
              },
            ],
          },
        },
      ],
    }
  : {}

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET,
      cookieSecret: process.env.COOKIE_SECRET,
    },
    redisUrl: productionEnvironment?.redisUrl,
    redisOptions: productionEnvironment ? { keyPrefix: process.env.MEDUSA_REDIS_KEY_PREFIX || "medusa:production:" } : undefined,
    workerMode: (productionEnvironment?.workerMode || process.env.MEDUSA_WORKER_MODE || "shared") as "shared" | "worker" | "server",
  },
  admin: { disable: productionEnvironment?.workerMode === "worker" },
  modules: [...productionInfrastructureModules, ...(paypalModules.modules || [])],
})
