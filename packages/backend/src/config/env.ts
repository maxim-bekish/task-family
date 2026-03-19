import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  JWT_SECRET: z.string().min(1),
  PORT: z.coerce.number().default(4000),
  TELEGRAM_BOT_TOKEN: z.string().min(1).optional(),
  WEB_APP_URL: z.string().url().optional(),
});

export const env = envSchema.parse(process.env);

