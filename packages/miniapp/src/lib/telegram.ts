/** Поля пользователя: так отдаёт data-onauth (плоский JSON). @see https://core.telegram.org/widgets/login */
export type TelegramLoginWidgetUserFields = {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
    auth_date: number;
    hash: string;
};

/** Форма для API / состояния: обёртка { user }. */
export type TelegramLoginWidgetPayload = {
    user: TelegramLoginWidgetUserFields;
};

/** Колбэк виджета отдаёт плоский объект; тестовые данные могут быть уже с { user }. */
export function toTelegramLoginWidgetPayload(raw: unknown): TelegramLoginWidgetPayload | null {
    if (!raw || typeof raw !== 'object') return null;
    const o = raw as Record<string, unknown>;
    const inner: unknown =
        'user' in o && o.user && typeof o.user === 'object' ? o.user : raw;
    if (!inner || typeof inner !== 'object') return null;
    const u = inner as Record<string, unknown>;
    if (
        typeof u.id !== 'number' ||
        typeof u.first_name !== 'string' ||
        typeof u.auth_date !== 'number' ||
        typeof u.hash !== 'string'
    ) {
        return null;
    }
    return {
        user: {
            id: u.id,
            first_name: u.first_name,
            last_name: typeof u.last_name === 'string' ? u.last_name : undefined,
            username: typeof u.username === 'string' ? u.username : undefined,
            photo_url: typeof u.photo_url === 'string' ? u.photo_url : undefined,
            auth_date: u.auth_date,
            hash: u.hash,
        },
    };
}

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
        onTelegramAuth?: (data: unknown) => void;
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
