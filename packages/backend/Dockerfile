FROM node:22-bookworm-slim

RUN apt-get update -y && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

WORKDIR /app

ENV DATABASE_URL="postgresql://postgres:postgres@postgres:5432/task_family?schema=public"

COPY package.json package-lock.json ./
COPY packages/backend/package.json ./packages/backend/
COPY packages/shared/package.json ./packages/shared/
COPY packages/miniapp/package.json ./packages/miniapp/

COPY packages/shared ./packages/shared

RUN npm install
RUN npm run build -w @task-family/shared

COPY packages/backend/prisma ./packages/backend/prisma
COPY packages/backend/prisma.config.ts ./packages/backend/
COPY packages/backend/tsconfig.json ./packages/backend/

WORKDIR /app/packages/backend
RUN npx prisma generate
WORKDIR /app

COPY packages/backend/src ./packages/backend/src

EXPOSE 4000

CMD ["sh", "-c", "npm run build -w @task-family/shared && npm run dev --prefix packages/backend"]