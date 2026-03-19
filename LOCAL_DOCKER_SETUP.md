## Локальный запуск (Docker) после клонирования репозитория

Этот гайд описывает, как поднять сервисы в Docker (Postgres + Adminer + Backend) и запустить миграции Prisma так, чтобы не использовать `localhost` в `DATABASE_URL` для контейнеров.

### Предусловия
1. Установлен и запущен **Docker Desktop**.
2. Репозиторий клонирован в папку `task-family`.

### 1 Поднять БД
Из корня проекта (`task-family`):
```bash
docker-compose up -d postgres adminer
```

Проверка:
```bash
docker ps
```
Ты должен увидеть контейнеры `task-family-db` и `task-family-adminer`.

### 2 Настроить переменные окружения backend
Файл: `packages/backend/.env`

Минимум:
```env
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/task_family?schema=public
JWT_SECRET=любой_длинный_секрет
PORT=4000
TELEGRAM_BOT_TOKEN=твой_token_от_BotFather
```

Важно:
- Для контейнеров нужно использовать хост `postgres`, а не `localhost`.

### 3 Собрать и запустить backend-контейнер
Из корня проекта:
```bash
docker-compose up -d --build backend
```

Проверка:
```bash
docker ps
```
Должен появиться контейнер `task-family-backend`.

### 4 Выполнить миграции Prisma (рекомендуется запускать внутри контейнера)
```bash
docker-compose exec backend npx prisma migrate dev --name init
```

После миграций можно проверить:
```bash
docker-compose logs --tail=50 backend
```

### 5 Проверить health endpoint
```bash
curl -sSf http://localhost:4000/health
```
Ожидаемый ответ:
```json
{"ok":true}
```

---
## Последующие запуски (когда код не менялся)

1) Просто поднять контейнеры:
```bash
docker-compose up -d
```

2) Применить новые миграции (если есть изменения в Prisma schema):
```bash
docker-compose exec backend npx prisma migrate deploy
```

3) Проверить логи при необходимости:
```bash
docker-compose logs -f backend
```

---
## Типичные ошибки

1) `P1001: Can't reach database server at postgres:5432`
- Обычно значит, что Prisma пытается подключиться с хоста, а не из docker-сети.
- Решение: выполнять миграции командой из контейнера:
  `docker-compose exec backend ...`

2) `no such service: .`
- Частая опечатка: запускали `docker-compose up -d.` с точкой в конце.
- Решение: `docker-compose up -d` без точки.

