import { useEffect, useRef } from 'react';
import { toTelegramLoginWidgetPayload, type TelegramLoginWidgetPayload } from '@/lib/telegram';

type TelegramLoginWidgetProps = {
    botUsername: string;
    onAuth: (user: TelegramLoginWidgetPayload) => void;
    size?: 'large' | 'medium' | 'small';
    requestWriteAccess?: boolean;
};

/**
 * Виджет входа Telegram для браузера. Колбэк должен быть в глобальной области — пробрасываем через window.onTelegramAuth.
 * Дока: data-onauth вызывается с плоским JSON (id, first_name, hash, …); приводим к { user } для API.
 * @see https://core.telegram.org/widgets/login
 */
export function TelegramLoginWidget({
    botUsername,
    onAuth,
    size = 'large',
    requestWriteAccess = true,
}: TelegramLoginWidgetProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const onAuthRef = useRef(onAuth);
    onAuthRef.current = onAuth;

    const loginName = botUsername.trim().replace(/^@/, '');

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        window.onTelegramAuth = (raw: unknown) => {
            const payload = toTelegramLoginWidgetPayload(raw);
            if (payload) onAuthRef.current(payload);
        };

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://telegram.org/js/telegram-widget.js?23';
        script.setAttribute('data-telegram-login', loginName);
        script.setAttribute('data-size', size);
        script.setAttribute('data-onauth', 'onTelegramAuth');
        // if (requestWriteAccess) {
        //     script.setAttribute('data-request-access', 'write');
        // }

        container.appendChild(script);

        return () => {
            delete window.onTelegramAuth;
            container.replaceChildren();
        };
    }, [loginName, size, requestWriteAccess]);

    return <div ref={containerRef} className='telegram-login-widget flex justify-center' />;
}
