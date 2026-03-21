import { PATHS } from '@task-family/shared';
import type { ApiErrorJson, TelegramLoginWidgetUser } from '@task-family/shared';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useAuthTelegramWidget = () => {
    return useMutation({
        mutationFn: async (body: TelegramLoginWidgetUser) => {
            try {
                const { data } = await axios.post<TelegramLoginWidgetUser>(
                    `${import.meta.env.VITE_API_URL}${PATHS.authTg}`,
                    body.user,
                );
                return data;
            } catch (e) {
                if (axios.isAxiosError(e)) {
                    throw e.response?.data as ApiErrorJson;
                }
            }
        },
    });
};
