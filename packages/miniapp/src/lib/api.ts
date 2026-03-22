import { PATHS } from '@task-family/shared';
import type { ApiErrorJson, TelegramLoginWidgetUser } from '@task-family/shared';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useAuthTelegramWidget = () => {
    return useMutation({
        mutationFn: async (body: TelegramLoginWidgetUser) => {
            try {
                const { data } = await axios.post<TelegramLoginWidgetUser>(
                    `http://localhost:4000${PATHS.authTg}`,
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
            const { data } = await axios.get<TelegramLoginWidgetUser>(`http://localhost:4000${PATHS.testUsers}`);
            return data;
        },
    });
};