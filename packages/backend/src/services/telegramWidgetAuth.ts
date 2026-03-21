import { z } from 'zod';

import { prisma } from '../prisma';

const telegramWidgetBodySchema = z.object({
    id: z.coerce.number().int().positive(),
    first_name: z.string().min(1),
    username: z.string().optional(),
    photo_url: z.string().optional(),
    auth_date: z.coerce.number().int(),
    hash: z.string().min(1),
});

export type TelegramWidgetBody = z.infer<typeof telegramWidgetBodySchema>;

export function parseTelegramWidgetBody(body: unknown): TelegramWidgetBody {
    return telegramWidgetBodySchema.parse(body);
}

export async function upsertUserFromTelegramWidget(body: TelegramWidgetBody) {
    const telegramId = BigInt(body.id);

    return prisma.user.upsert({
        where: { telegramId },
        create: {
            telegramId,
            username: body.username?.trim() || `tg_${body.id}`,
            firstName: body.first_name,
        },
        update: {
            username: body.username?.trim() || `tg_${body.id}`,
            firstName: body.first_name,
        },
    });
}
