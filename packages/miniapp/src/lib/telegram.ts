/** Ответ Login Widget после входа; проверяй hash на бэкенде. */
export type TelegramLoginWidgetPayload = {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
    auth_date: number;
    hash: string;
};

/** Данные из initDataUnsafe — только для UI; для доверенной авторизации используй initData на бэкенде. */
export type TelegramWebAppUser = {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    photo_url?: string;
};

declare global {
    interface Window {
        Telegram?: {
            WebApp: {
                initData: string;
                initDataUnsafe: {
                    user?: TelegramWebAppUser;
                    query_id?: string;
                    auth_date?: number;
                    hash?: string;
                };
                ready: () => void;
                expand: () => void;
            };
        };
    }
}

export function getTelegramWebApp() {
    return window.Telegram?.WebApp ?? null;
}

/** Пользователь из клиента (не подписан криптографически). */
export function getTelegramUser(): TelegramWebAppUser | null {
    return getTelegramWebApp()?.initDataUnsafe.user ?? null;
}

/** Строка initData для проверки на сервере (HMAC с токеном бота). */
export function getTelegramInitData(): string {
    return getTelegramWebApp()?.initData ?? '';
}

/** Открыто из Telegram Mini App с непустым initData. */
export function isTelegramMiniApp(): boolean {
    return Boolean(getTelegramInitData());
}
