import { Router } from 'express';
import { ZodError } from 'zod';

import { sendApiError } from '../lib/httpError';
import { PATHS } from '@task-family/shared';
import { prisma } from '../prisma';
import { parseTelegramWidgetBody, upsertUserFromTelegramWidget } from '../services/telegramWidgetAuth';

export const authRouter = Router();

authRouter.get(PATHS.testUsers, async (_req, res) => {
    try {
        const rows = await prisma.user.findMany({ orderBy: { createdAt: 'desc' } });
        return res.json({
            users: rows.map((u) => ({
                id: u.id,
                telegramId: u.telegramId.toString(),
                username: u.username,
                firstName: u.firstName,
                createdAt: u.createdAt.toISOString(),
            })),
        });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error('test/users', err);
        return sendApiError(res, 500, 'INTERNAL_ERROR', 'Не удалось загрузить пользователей');
    }
});

authRouter.post(PATHS.authTg, async (req, res) => {
    try {
        const payload = parseTelegramWidgetBody(req.body);
        const user = await upsertUserFromTelegramWidget(payload);

        return res.json({
            ...payload,
            user: {
                id: user.id,
                telegramId: user.telegramId.toString(),
                username: user.username,
                firstName: user.firstName,
            },
        });
    } catch (err) {
        if (err instanceof ZodError) {
            return sendApiError(res, 400, 'INVALID_PAYLOAD', 'Неверное тело запроса');
        }
        // eslint-disable-next-line no-console
        console.error('auth/tg', err);
        return sendApiError(res, 500, 'INTERNAL_ERROR', 'Не удалось сохранить пользователя');
    }
});
