const { Markup, Telegraf } = require('telegraf');

import { env } from '../config/env';

function getStartPayload(rawText?: string): string | null {
    if (!rawText) {
        return null;
    }

    const parts = rawText.trim().split(/\s+/);
    if (parts.length < 2) {
        return null;
    }

    return parts[1] ?? null;
}

function buildWebAppUrl(baseUrl: string, payload: string | null): string {
    if (!payload) {
        return baseUrl;
    }

    const url = new URL(baseUrl);
    url.searchParams.set('start', payload);
    return url.toString();
}

export async function startTelegramBot(): Promise<void> {
    const botToken = env.TELEGRAM_BOT_TOKEN;
    const webAppUrl = env.WEB_APP_URL;

    if (!botToken || !webAppUrl) {
        console.log('Telegram bot skipped: set TELEGRAM_BOT_TOKEN and WEB_APP_URL in .env');
        return;
    }

    const bot = new Telegraf(botToken);

    bot.start(async (ctx: any) => {
        const payloadFromText = getStartPayload(ctx.message?.text);
        const appUrl = buildWebAppUrl(webAppUrl, payloadFromText);

        console.log('appUrl------', appUrl);
        await ctx.reply(
            [
                '🤖 Добро пожаловать в Family Tasks!',
                '',
                'Управляйте семейными задачами в удобном интерфейсе.',
                '',
                '👇 Нажмите кнопку ниже, чтобы открыть приложение',
            ].join('\n'),
            Markup.inlineKeyboard([Markup.button.webApp('📱 ОТКРЫТЬ ПРИЛОЖЕНИЕ', appUrl)]),
        );
    });

    try {
        await bot.launch();
        console.log('Telegram bot started');
    } catch (error) {
        console.error('Telegram bot launch failed:', error);
        return;
    }

    process.once('SIGINT', () => {
        bot.stop('SIGINT');
    });
    process.once('SIGTERM', () => {
        bot.stop('SIGTERM');
    });
}
