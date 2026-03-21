export type TelegramLoginWidgetUser = {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
    auth_date: number;
    hash: string;
};

export type ApiErrorJson = {
    code: string;
    message: string;
    details?: string;
};