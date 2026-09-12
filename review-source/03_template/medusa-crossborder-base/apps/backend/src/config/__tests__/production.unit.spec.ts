import { validateProductionEnvironment } from "../production"

const valid = {
  NODE_ENV: "production",
  MEDUSA_PRODUCTION_INFRASTRUCTURE_ENABLED: "true",
  MEDUSA_WORKER_MODE: "server",
  DATABASE_URL: "postgresql://medusa@db.example/medusa",
  JWT_SECRET: "generated-jwt-secret-with-enough-entropy",
  COOKIE_SECRET: "generated-cookie-secret-with-enough-entropy",
  STORE_CORS: "https://store.example",
  ADMIN_CORS: "https://admin.example",
  AUTH_CORS: "https://store.example,https://admin.example",
  REDIS_URL: "rediss://redis.example:6380",
}

describe("production runtime boundary", () => {
  it("requires explicit infrastructure and worker role", () => {
    expect(validateProductionEnvironment(valid)).toEqual({ workerMode: "server", redisUrl: valid.REDIS_URL })
    expect(() => validateProductionEnvironment({ ...valid, MEDUSA_PRODUCTION_INFRASTRUCTURE_ENABLED: "false" })).toThrow("INFRASTRUCTURE")
    expect(() => validateProductionEnvironment({ ...valid, MEDUSA_WORKER_MODE: "shared" })).toThrow("WORKER_MODE")
  })

  it("keeps the local artifact runner out of production", () => {
    expect(validateProductionEnvironment({ NODE_ENV: "development" })).toBeUndefined()
    expect(() => validateProductionEnvironment({ NODE_ENV: "production", MEDUSA_LOCAL_RUNTIME: "true" })).toThrow("LOCAL_RUNTIME")
    expect(() => validateProductionEnvironment({ NODE_ENV: "production" })).toThrow("INFRASTRUCTURE")
  })

  it("rejects weak secrets, broad CORS and non-TLS Redis", () => {
    expect(() => validateProductionEnvironment({ ...valid, JWT_SECRET: "supersecret" })).toThrow("JWT_SECRET")
    expect(() => validateProductionEnvironment({ ...valid, STORE_CORS: "*" })).toThrow("STORE_CORS")
    expect(() => validateProductionEnvironment({ ...valid, REDIS_URL: "redis://redis.example" })).toThrow("rediss")
  })
})
