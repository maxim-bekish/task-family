import { Router } from 'express';
import { ZodError } from 'zod';

import { sendApiError } from '../lib/httpError';
import { PATHS } from '@task-family/shared';
import { parseTelegramWidgetBody, upsertUserFromTelegramWidget } from '../services/telegramWidgetAuth';

export const authRouter = Router();

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
