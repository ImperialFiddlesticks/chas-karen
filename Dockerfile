# syntax=docker/dockerfile:1

# ---- Base ----------------------------------------------------------------
# Next 16 requires Node >= 20.9
FROM node:22-alpine AS base
WORKDIR /app

# ---- Dependencies --------------------------------------------------------
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---- Dev (optional, used by the `dev` profile in docker-compose.yml) -----
FROM base AS dev
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
COPY . .
COPY --from=deps /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "run", "dev"]

# ---- Build ---------------------------------------------------------------
FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1
# Produces .next/standalone without needing `output: "standalone"` in
# next.config.ts, so this image builds against an unmodified checkout.
ENV NEXT_PRIVATE_STANDALONE=true
# Source first, then deps: a node_modules directory left in the build context
# by a host-side `npm install` cannot overwrite the one built above.
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# ---- Runtime -------------------------------------------------------------
# Only the traced runtime files are copied, so no node_modules install here.
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
