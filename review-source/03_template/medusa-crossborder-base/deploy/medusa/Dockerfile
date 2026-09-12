FROM node:22.14.0-bookworm-slim AS build

WORKDIR /app
ARG NPM_REGISTRY=https://registry.npmjs.org/
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN npm install --global --ignore-scripts --registry="${NPM_REGISTRY}" pnpm@10.11.1
RUN pnpm config set registry "${NPM_REGISTRY}"
COPY apps/backend/package.json apps/backend/package.json
COPY apps/storefront/package.json apps/storefront/package.json
RUN pnpm install --frozen-lockfile
COPY apps/backend apps/backend
RUN pnpm --dir apps/backend build
RUN pnpm prune --prod

FROM node:22.14.0-bookworm-slim AS runtime

WORKDIR /app/apps/backend/.medusa/server
RUN corepack enable && useradd --create-home --uid 10001 medusa
COPY --from=build --chown=medusa:medusa /app/node_modules /app/node_modules
COPY --from=build --chown=medusa:medusa /app/apps/backend/node_modules /app/apps/backend/node_modules
COPY --from=build --chown=medusa:medusa /app/apps/backend/.medusa/server /app/apps/backend/.medusa/server
COPY deploy/medusa/entrypoint.sh /app/entrypoint.sh
    RUN sed -i 's/\r$//' /app/entrypoint.sh
    RUN chmod 0555 /app/entrypoint.sh
    RUN chown -R medusa:medusa /app/apps/backend/.medusa/server \
      && test -f /app/apps/backend/.medusa/server/medusa-config.js \
      && test -f /app/apps/backend/.medusa/server/package.json \
      && test -f /app/apps/backend/node_modules/@medusajs/cli/cli.js
ENV NODE_ENV=production
ENV MEDUSA_RUNTIME_ROLE=server
ENV MEDUSA_WORKER_MODE=server
EXPOSE 9000
USER medusa
ENTRYPOINT ["/app/entrypoint.sh"]
