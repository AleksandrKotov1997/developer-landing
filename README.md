# Developer Landing — Котов Александр

Личный лендинг-визитка frontend / fullstack-oriented разработчика.

Проект показывает мой профиль, опыт с продуктовыми интерфейсами, работу с React/TypeScript, небольшую backend API-фичу и аккуратную структуру frontend/backend приложения.

## Стек

### Frontend

- React
- TypeScript
- Vite
- SCSS Modules
- Fetch API

### Backend

- Node.js
- Express
- TypeScript
- Zod

## Что реализовано

- адаптивный лендинг-визитка;
- секции с опытом, навыками, workflow, проектами и контактами;
- интерактивный блок Work Scenario;
- backend endpoint для генерации текста сценария;
- backend-валидация выбранных параметров через Zod;
- scroll reveal анимации для секций и карточек;
- frontend-only контакты: телефон, Telegram, GitHub, GitLab и резюме PDF;
- отдельный frontend и backend deploy.

## Структура проекта

```txt
developer-landing/
  client/   # React frontend
  server/   # Express backend API
```

### Frontend

```txt
client/src/
  api/          # API functions
  app/          # root app component
  components/   # shared UI components
  config/       # frontend env config
  views/        # page-level views
  types.ts      # shared frontend types
```

### Backend

```txt
server/src/
  modules/
    workScenario/  # scenario text API module
  shared/
    config/        # env config
    errors/        # API error handling
  app.ts
  server.ts
```

## Как запустить локально

Проект состоит из frontend и backend, поэтому локально их нужно запустить отдельно.

### Backend

```bash
cd server
npm install
npm run dev
```

Backend запускается на:

```txt
http://localhost:4000
```

Health check:

```txt
http://localhost:4000/api/health
```

### Frontend

```bash
cd client
npm install
npm run dev
```

Frontend запускается на:

```txt
http://localhost:5173
```

## Переменные окружения

### Backend

Файл:

```txt
server/.env
```

Пример:

```env
PORT=4000
CLIENT_URL=http://localhost:5173
```

### Frontend

Файл:

```txt
client/.env
```

Пример:

```env
VITE_API_URL=http://localhost:4000
```

Если `VITE_API_URL` не указан, frontend использует `http://localhost:4000` по умолчанию.

## Backend API

### Health check

```txt
GET /api/health
```

### Work Scenario

```txt
POST /api/work-scenario
```

Endpoint принимает выбранный тип задачи, контекст проекта и тон ответа. Backend валидирует payload через Zod и возвращает готовый scenario-based текст.

Пример payload:

```json
{
  "taskType": "adminUi",
  "projectContext": "existingProject",
  "tone": "professional"
}
```

## Деплой

Frontend задеплоен на Vercel:

```txt
https://developer-landing-delta.vercel.app
```

Backend задеплоен на Render:

```txt
https://developer-landing-api.onrender.com
```

Health check backend:

```txt
https://developer-landing-api.onrender.com/api/health
```

Контакты на сайте работают без backend: это обычные frontend-ссылки на телефон, Telegram, GitHub, GitLab и PDF-резюме.

Backend сейчас нужен для блока Work Scenario.

## Проверка сборки

### Frontend

```bash
cd client
npm run build
```

### Backend

```bash
cd server
npm run build
```

Оба build должны проходить без ошибок.

## Контакты

- Телефон: +7 902 674-78-64
- Telegram: https://t.me/aleksandr_kotoff
- GitHub: https://github.com/AleksandrKotov1997
- GitLab: https://gitlab.skillbox.ru/aleksandr_kotov_3
