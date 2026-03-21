import { useEffect, useRef } from 'react';
import type { TelegramLoginWidgetPayload } from '@/lib/telegram';

type TelegramLoginWidgetProps = {
    botUsername: string;
    onAuth: (user: TelegramLoginWidgetPayload) => void;
    size?: 'large' | 'medium' | 'small';
    requestWriteAccess?: boolean;
};

declare global {
    interface Window {
        onTelegramAuth?: (user: TelegramLoginWidgetPayload) => void;
    }
}

/**
 * Виджет входа Telegram для браузера. Колбэк должен быть в глобальной области — пробрасываем через window.onTelegramAuth.
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

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        window.onTelegramAuth = (user) => onAuthRef.current(user);
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://telegram.org/js/telegram-widget.js?23';
        script.setAttribute('data-telegram-login', botUsername);
        script.setAttribute('data-size', size);
        script.setAttribute('data-onauth', 'onTelegramAuth');
        if (requestWriteAccess) {
            script.setAttribute('data-request-access', 'write');
        }

        container.appendChild(script);

        return () => {
            if (window.onTelegramAuth) {
                delete window.onTelegramAuth;
            }
            container.replaceChildren();
        };
    }, [botUsername, size, requestWriteAccess]);

    return <div ref={containerRef} className='telegram-login-widget flex justify-center' />;
}
