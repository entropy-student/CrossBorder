import { MedusaError } from "@medusajs/framework/utils"

type Environment = Record<string, string | undefined>

const weakValues = new Set(["supersecret", "changeme", "password", "secret"])

const required = (env: Environment, name: string): string => {
  const value = env[name]?.trim()
  if (!value) throw new MedusaError(MedusaError.Types.INVALID_DATA, `${name} is required in production.`)
  if (weakValues.has(value.toLowerCase()) || /GENERATED_BY|PLACEHOLDER|LOCAL_ONLY/i.test(value)) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, `${name} must be a generated production secret.`)
  }
  return value
}

const requireCors = (env: Environment, name: string): string => {
  const value = required(env, name)
  if (value === "*" || value.split(",").some((origin) => !/^https:\/\/[^\s,]+$/.test(origin.trim()))) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, `${name} must contain explicit HTTPS origins in production.`)
  }
  return value
}

export function validateProductionEnvironment(env: Environment): { workerMode: "server" | "worker"; redisUrl: string } | undefined {
  if (env.NODE_ENV?.toLowerCase() !== "production") return undefined
  if (env.MEDUSA_LOCAL_RUNTIME?.toLowerCase() === "true") {
    throw new MedusaError(MedusaError.Types.NOT_ALLOWED, "MEDUSA_LOCAL_RUNTIME is not allowed when NODE_ENV=production.")
  }
  if (env.MEDUSA_PRODUCTION_INFRASTRUCTURE_ENABLED?.toLowerCase() !== "true") {
    throw new MedusaError(MedusaError.Types.NOT_ALLOWED, "Production requires MEDUSA_PRODUCTION_INFRASTRUCTURE_ENABLED=true.")
  }
  const workerMode = env.MEDUSA_WORKER_MODE?.toLowerCase()
  if (workerMode !== "server" && workerMode !== "worker") {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, "Production requires MEDUSA_WORKER_MODE=server or worker.")
  }
  required(env, "DATABASE_URL")
  required(env, "JWT_SECRET")
  required(env, "COOKIE_SECRET")
  requireCors(env, "STORE_CORS")
  requireCors(env, "ADMIN_CORS")
  requireCors(env, "AUTH_CORS")
  const redisUrl = required(env, "REDIS_URL")
  if (!redisUrl.startsWith("rediss://")) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, "REDIS_URL must use rediss:// in production.")
  }
  return { workerMode, redisUrl }
}
