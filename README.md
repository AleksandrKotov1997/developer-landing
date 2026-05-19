# Developer Landing — Котов Александр

Небольшой лендинг-презентация обо мне как frontend-разработчике.

Проект сделан как тестовое задание и показывает полный цикл работы: frontend, backend API, форма обратной связи, валидация, обработка loading/success/error состояний, отправка email и AI helper endpoint.

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
- Nodemailer
- Mail.ru SMTP

## Что реализовано

- адаптивный лендинг-презентация;
- секции с информацией обо мне, подходом к работе, опытом и контактами;
- форма обратной связи с полями: имя, телефон, email, комментарий;
- frontend-валидация формы;
- backend-валидация через Zod;
- отправка письма владельцу сайта;
- отправка копии письма пользователю;
- обработка loading, success и error состояний;
- отдельный backend endpoint для AI helper;
- README с описанием запуска и реализации.

## Структура проекта

```txt
developer-landing/
  client/   # React frontend
  server/   # Node.js backend API
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
    contact/    # contact form module
    ai/         # AI helper module
  shared/
    config/     # env config
    errors/     # API error handling
    mailer/     # Nodemailer transport
  app.ts
  server.ts
```

## Как запустить проект локально

Проект состоит из двух частей, поэтому локально нужно запустить frontend и backend отдельно.

### 1. Backend

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

### 2. Frontend

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

Для backend нужен файл:

```txt
server/.env
```

Пример находится в:

```txt
server/.env.example
```

Пример переменных:

```env
PORT=4000
CLIENT_URL=http://localhost:5173

MAIL_HOST=smtp.mail.ru
MAIL_PORT=465
MAIL_USER=kotov.aleksandr.9797@mail.ru
MAIL_PASSWORD=my_mail_ru_external_app_password
MAIL_FROM=kotov.aleksandr.9797@mail.ru
MAIL_TO=kotov.aleksandr.9797@mail.ru
```

`MAIL_PASSWORD` — это не основной пароль от почты, а пароль для внешнего приложения Mail.ru.

Файл `server/.env` не должен попадать в GitHub.

### Frontend

Для frontend можно использовать файл:

```txt
client/.env
```

Пример:

```env
VITE_API_URL=http://localhost:4000
```

Если переменная не указана, frontend использует `http://localhost:4000` по умолчанию.

## Как реализована форма

Форма находится на frontend в блоке контактов.

Пользователь заполняет:

- имя;
- телефон;
- email;
- комментарий;
- необязательное поле AI summary.

На frontend реализована валидация:

- имя — не менее 2 символов;
- телефон — только цифры;
- email — корректный формат;
- комментарий — не менее 10 символов.

Ошибки показываются под соответствующими полями красным цветом.

После успешной frontend-валидации данные отправляются на backend:

```txt
POST /api/contact
```

Backend повторно валидирует данные через Zod. После успешной проверки backend отправляет два письма через Nodemailer:

- письмо владельцу сайта на `MAIL_TO`;
- копию письма пользователю на email из формы.

Если отправка успешна, frontend показывает success-сообщение. Если возникает ошибка, frontend показывает error-состояние.

## AI helper

В проекте реализован отдельный endpoint:

```txt
POST /api/ai/summary
```

Он принимает комментарий и возвращает короткое summary.

Сейчас AI helper работает как локальный fallback без внешнего API-ключа. Это сделано потому, что OpenAI API key в проекте не используется. При этом логика вынесена в отдельный backend-модуль, поэтому при наличии ключа endpoint можно заменить на реальную интеграцию с OpenAI API без изменения структуры frontend.

## Какие AI-инструменты использовались

В процессе выполнения тестового я использовал AI как помощника:

- для планирования структуры frontend/backend;
- для подготовки черновиков текстов;
- для формулировки README.

## Что пришлось исправлять вручную

После AI-подсказок я вручную проверял и исправлял:

- визуальные отступы между секциями;
- тексты, чтобы убрать повторения и тавтологию;
- frontend-валидацию формы;
- поведение ошибок под конкретными полями;
- настройку SMTP через Mail.ru;
- сборку frontend и backend.

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

- Email: kotov.aleksandr.9797@mail.ru
- Телефон: +7 902 674-78-64
- GitHub: https://github.com/AleksandrKotov1997
- GitLab: https://gitlab.skillbox.ru/aleksandr_kotov_3
