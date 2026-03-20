import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

import { env } from './config/env';

// Prisma 7 требует явного adapter/accelerateUrl для рантайма.
const adapter = new PrismaPg({
    connectionString: env.DATABASE_URL,
});

export const prisma = new PrismaClient({ adapter });
