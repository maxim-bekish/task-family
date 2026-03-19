import "dotenv/config";
import express from "express";
import cors from "cors";

import { env } from "./config/env";
import { prisma } from "./prisma";
import { healthRouter } from "./routes/health";
import { startTelegramBot } from "./bot/telegramBot";

const app = express();

app.use(cors());
app.use(express.json());

app.use(healthRouter);

async function main() {
  // Подключимся к БД на старте, чтобы быстрее понять проблемы в конфиге.
  try {
    await prisma.$connect();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Prisma connect failed:", err);
  }

  app.listen(env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`API listening on :${env.PORT}`);
  });

  await startTelegramBot();
}

main();

