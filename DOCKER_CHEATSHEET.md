# Docker — частые команды (шпаргалка)

Все команды выполнять из **корня проекта** `task-family`, где лежит `docker-compose.yml`.

---

## Запуск и остановка

| Действие | Команда |
|----------|---------|
| Поднять все сервисы в фоне | `docker-compose up -d` |
| Только Postgres + Adminer | `docker-compose up -d postgres adminer` |
| Только backend (и зависимости) | `docker-compose up -d backend` |
| Пересобрать образ backend и поднять | `docker-compose up -d --build backend` |
| Пересоздать контейнер (новый `.env`) | `docker-compose up -d --force-recreate backend` |
| Остановить все | `docker-compose down` |
| Остановить и удалить volumes (⚠️ сотрёт данные БД) | `docker-compose down -v` |

---

## Статус и логи

| Действие | Команда |
|----------|---------|
| Список контейнеров | `docker ps` |
| Логи backend (последние 100 строк) | `docker logs --tail 100 task-family-backend` |
| Логи в реальном времени | `docker logs -f task-family-backend` |
| Только свежие логи (например 2 мин) | `docker logs --since 2m task-family-backend` |
| Логи через compose | `docker-compose logs -f backend` |

---

## Перезапуск

| Действие | Команда |
|----------|---------|
| Перезапустить backend | `docker-compose restart backend` |
| Перезапустить всё | `docker-compose restart` |

> После смены переменных в `.env` надёжнее: `docker-compose up -d --force-recreate backend`

---

## Команды внутри контейнера

| Действие | Команда |
|----------|---------|
| Shell в backend | `docker-compose exec backend sh` |
| Установить зависимости в backend | `docker-compose exec backend npm install` |
| Prisma migrate deploy | `docker-compose exec backend sh -c "cd /app/packages/backend && npx prisma migrate deploy"` |

---

## Сборка образа

| Действие | Команда |
|----------|---------|
| Собрать backend без запуска всего | `docker-compose build backend` |

---

## Типичные ошибки

| Симптом | Что проверить |
|---------|----------------|
| `no such service: .` | В конце команды случайно стоит точка: используй `docker-compose up -d` без `.` |
| Backend не видит новый `.env` | `docker-compose up -d --force-recreate backend` |
| `Can't reach postgres` с хоста | В `.env` для миграций с ПК — `localhost:5432`; в контейнере — `postgres:5432` |

---

## Имена контейнеров (твой проект)

- `task-family-db` — PostgreSQL  
- `task-family-adminer` — Adminer (`http://localhost:8080`)  
- `task-family-redis` — Redis  
- `task-family-backend` — API (`http://localhost:4000`)

---

Подробный сценарий «с нуля»: см. `LOCAL_DOCKER_SETUP.md`.
