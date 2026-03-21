# Чеклист: авторизация Telegram (Mini App + браузер)

## Подготовка (BotFather / Telegram)

- [ ] У бота задан **username** (нужен для Login Widget).
- [ ] В [@BotFather](https://t.me/BotFather) настроен **домен** для виджента входа (`/setdomain` / аналог в интерфейсе): без `https://`, только хост (прод: `your-app.vercel.app` или свой домен; дев: хост туннеля, например `taskfamily-dev.loca.lt`).
- [ ] При разных доменах для дев/прод решить: один бот с несколькими доменами (если позволено) или **отдельный тестовый бот** для локалки.

## Бэкенд

- [ ] Эндпоинт **Mini App**: принимает `initData` (строка), валидация по [документации Web Apps](https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app), из результата — `user.id` и профиль.
- [ ] Эндпоинт **Login Widget**: принимает параметры колбэка (`id`, `first_name`, `auth_date`, `hash`, …), валидация по [Checking authorization](https://core.telegram.org/widgets/login#checking-authorization).
- [ ] Проверка **свежести** `auth_date` (например, не старше 24 часов).
- [ ] После успеха: **найти или создать** пользователя в БД по `telegram_id`, выдать **свою сессию** (JWT / httpOnly cookie — по выбранной схеме).
- [ ] **Токен бота** только на сервере, не отдавать на клиент.

## Фронт (miniapp)

- [ ] Если есть `Telegram.WebApp` и непустой **`initData`** — сценарий **Mini App**: отправить `initData` на бэкенд, сохранить сессию.
- [ ] Иначе — сценарий **браузер**: показать [Telegram Login Widget](https://core.telegram.org/widgets/login) (`data-telegram-login`, `data-bot`, колбэк `onTelegramAuth` / редирект — по выбранному варианту из доки).
- [ ] В колбэке виджета: **POST** на бэкенд с данными пользователя, сохранить токен/куку, обновить UI.
- [ ] Запросы к API после входа — с **одной и той же** схемой сессии, что и после Mini App.

## Безопасность и инфраструктура

- [ ] Не использовать **`initDataUnsafe`** как доказательство личности — только после **серверной** проверки `initData`.
- [ ] **CORS**: разрешить origin прод-домена и дев-туннеля.
- [ ] Прод — **HTTPS**; туннель (localtunnel / cloudflared) уже даёт HTTPS.

## Проверка (ручные сценарии)

- [ ] Открытие из **Telegram** (Mini App) → успешный вход, сессия работает.
- [ ] Открытие **в обычном браузере** по тому же приложению → виджет → тот же пользователь по `telegram_id`, сессия работает.
- [ ] Запрос с **поддельным `hash`** или **просроченным `auth_date`** → отказ (401/403) на бэкенде.

## Полезные ссылки

- [Mini Apps — валидация данных](https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app)
- [Login Widget](https://core.telegram.org/widgets/login)
- [Проверка подписи Login Widget](https://core.telegram.org/widgets/login#checking-authorization)