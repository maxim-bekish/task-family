FROM node:22-bookworm-slim

WORKDIR /app

# Prisma при генерации читает prisma.config.ts и требует DATABASE_URL.
# На этапе docker build переменные из env_file ещё не доступны, поэтому задаём дефолт для докера.
ENV DATABASE_URL="postgresql://postgres:postgres@postgres:5432/task_family?schema=public"

COPY package.json ./

COPY tsconfig.json ./
COPY prisma ./prisma
COPY prisma.config.ts ./

RUN npm install
RUN npx prisma generate

COPY src ./src

EXPOSE 4000

CMD ["npm", "run", "dev"]

