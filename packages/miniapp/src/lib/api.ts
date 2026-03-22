import { PATHS } from '@task-family/shared';
import type { ApiErrorJson, TelegramLoginWidgetUser } from '@task-family/shared';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

/** Прод: VITE_API_URL в Vercel. Локально — в .env или в dev по умолчанию localhost:4000. */
function apiBaseUrl(): string {
    const fromEnv = import.meta.env.VITE_API_URL?.trim().replace(/\/$/, '');
    if (fromEnv) return fromEnv;
    if (import.meta.env.DEV) return 'http://localhost:4000';
    return '';
}

const apiUrl = (path: string) => `${apiBaseUrl()}${path}`;

export const useAuthTelegramWidget = () => {
    return useMutation({
        mutationFn: async (body: TelegramLoginWidgetUser) => {
            try {
                const { data } = await axios.post<TelegramLoginWidgetUser>(
                    apiUrl(PATHS.authTg),
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

export const useGetUsersQuery = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axios.get(apiUrl(PATHS.testUsers));
            return data;
        },
    });
};
