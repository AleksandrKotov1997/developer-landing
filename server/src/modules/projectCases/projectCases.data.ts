import type {
  ProjectCaseDetails,
  ProjectCaseSlug,
} from "./projectCases.types.js";

export const projectCases: Partial<
  Record<ProjectCaseSlug, ProjectCaseDetails>
> = {
  "developer-landing": {
    slug: "developer-landing",
    title: "Developer Landing",
    type: "Fullstack developer landing",
    role: "Frontend / fullstack-oriented developer",
    content: {
      ru: {
        context: [
          "Эту визитку я сделал как собственный product/fullstack-кейс, чтобы работодателю было проще быстро понять мой профиль, стек, коммерческий опыт, подход к работе и примеры задач.",
          "Проект не ограничивается статичной страницей: он объединяет frontend, backend API, мультиязычный контент, тему оформления, интерактивный сценарий для работодателя и production-деплой.",
        ],
        responsibilities: [
          "Продумал структуру сайта, содержание блоков, визуальную подачу и сценарии, которые помогают раскрыть мой опыт как frontend / fullstack-oriented разработчика.",
          "Реализовал интерфейс на React и TypeScript, выстроил структуру компонентов, контентных секций, SCSS Modules и адаптивное поведение для разных устройств.",
          "Реализовал backend на Express с валидацией через Zod и endpoint для интерактивного сценария, который помогает адаптировать сообщение под тип вакансии.",
          "Добавил сохранение языка и темы, проверил пользовательские сценарии на desktop и mobile и подготовил проект к production-деплою.",
        ],
        engineeringFocus: [
          "Frontend-архитектура: разделение компонентов, контента, API-слоя и feature-логики без лишнего усложнения.",
          "Fullstack-связка: React/TypeScript frontend, Express backend, Zod validation, typed API contract и production deploy.",
          "UX и доступность восприятия: понятная структура страницы, логика блоков без дублирования, адаптивность и сохранение пользовательских настроек.",
          "Развитие проекта как продукта: постепенное добавление новых возможностей — деталей проектов, тестов, событий/аналитики и сценария для работодателя.",
        ],
        result:
          "В результате получился production-ready landing, который помогает быстро познакомиться с моим опытом, проектами, подходом к разработке и тем, как я решаю реальные продуктовые задачи.",
      },
      en: {
        context: [
          "I built this landing as my own product/fullstack case so employers can quickly understand my profile, stack, commercial experience, working approach, and examples of tasks.",
          "The project is not limited to a static page: it combines frontend, backend API, multilingual content, theme switching, an interactive employer scenario, and production deployment.",
        ],
        responsibilities: [
          "Designed the site structure, content sections, visual presentation, and scenarios that help present my experience as a frontend / fullstack-oriented developer.",
          "Implemented the interface with React and TypeScript, structured components, content sections, SCSS Modules, and responsive behavior for different devices.",
          "Implemented an Express backend with Zod validation and an endpoint for the interactive scenario that helps adapt a message to a vacancy type.",
          "Added persisted language and theme preferences, checked user flows on desktop and mobile, and prepared the project for production deployment.",
        ],
        engineeringFocus: [
          "Frontend architecture: separating components, content, API layer, and feature logic without unnecessary complexity.",
          "Fullstack connection: React/TypeScript frontend, Express backend, Zod validation, typed API contract, and production deployment.",
          "UX and readability: clear page structure, non-duplicated section logic, responsive behavior, and persisted user settings.",
          "Product-oriented development: gradually adding new capabilities — project details, tests, events/analytics, and an employer-focused scenario.",
        ],
        result:
          "The result is a production-ready landing that helps employers quickly understand my experience, projects, development approach, and how I solve real product tasks.",
      },
    },
  },
  "vin-backbone": {
    slug: "vin-backbone",
    title: "Payment System Case (NDA)",
    type: "Commercial payment platform",
    role: "Frontend / fullstack-oriented developer",
    content: {
      ru: {
        context: [
          "Этот кейс связан с коммерческой платёжной системой под NDA: admin-интерфейсами, внутренними бизнес-сценариями, payment request процессами и интеграцией frontend с backend API.",
          "Проект развивался как рабочая production-система, где важно было не просто сверстать экраны, а аккуратно поддерживать сценарии заявок, статусов, действий пользователя, загрузки данных и обработки ошибок.",
          "Frontend в проекте был тесно связан с бизнес-логикой и API-контрактами: формы, таблицы, фильтрация, состояния интерфейса и пользовательские действия должны были работать предсказуемо и одинаково в разных частях продукта.",
        ],
        responsibilities: [
          "Развивал frontend-часть коммерческой платёжной системы и реализовывал интерфейсы для внутренних пользователей продукта.",
          "Разрабатывал admin-экраны, таблицы, формы и сценарии, связанные с payment requests, статусами, действиями пользователя и внутренними бизнес-процессами.",
          "Подключал frontend к backend API, работал с загрузкой данных, обработкой ошибок, success/error состояниями и валидацией пользовательских действий.",
          "Участвовал в обсуждении требований, уточнял поведение интерфейсов и помогал приводить похожие сценарии к более единому и поддерживаемому подходу.",
        ],
        engineeringFocus: [
          "Admin UI для коммерческих платёжных сценариев: таблицы, формы, статусы, действия пользователя и понятная обратная связь.",
          "Единый подход к API-запросам, загрузке данных, ошибкам и состояниям интерфейса в похожих частях продукта.",
          "Интеграция frontend с backend API, API-контрактами и бизнес-логикой payment request процессов.",
          "Поддержка существующего production-кода без резких изменений: аккуратные доработки, проверка сценариев и сохранение текущего поведения системы.",
        ],
        result:
          "В результате кейс показывает мой опыт развития коммерческой платёжной системы: admin UI, payment request сценарии, API-интеграции, работу с состояниями интерфейса и аккуратные изменения в существующем production-проекте.",
      },
      en: {
        context: [
          "This case is connected to a commercial payment system under NDA: admin interfaces, internal business workflows, payment request processes, and frontend integration with backend APIs.",
          "The project evolved as a real production system where the task was not just to build screens, but to carefully support request flows, statuses, user actions, data loading, and error handling.",
          "The frontend was tightly connected to business logic and API contracts: forms, tables, filtering, interface states, and user actions had to work predictably and consistently across the product.",
        ],
        responsibilities: [
          "Developed the frontend part of a commercial payment system and implemented interfaces for internal product users.",
          "Built admin screens, tables, forms, and flows related to payment requests, statuses, user actions, and internal business workflows.",
          "Connected the frontend with backend APIs, worked with data loading, error handling, success/error states, and validation of user actions.",
          "Participated in requirement discussions, clarified interface behavior, and helped make similar flows more consistent and maintainable.",
        ],
        engineeringFocus: [
          "Admin UI for commercial payment scenarios: tables, forms, statuses, user actions, and clear feedback.",
          "A consistent approach to API requests, data loading, errors, and interface states across similar product areas.",
          "Frontend integration with backend APIs, API contracts, and business logic around payment request processes.",
          "Supporting an existing production codebase without disruptive changes: careful updates, scenario checks, and preserving current system behavior.",
        ],
        result:
          "The result is a case that demonstrates my experience developing a commercial payment system: admin UI, payment request flows, API integrations, interface states, and careful changes in an existing production project.",
      },
    },
  },
  "dealer-intelligence": {
    slug: "dealer-intelligence",
    title: "Automotive DMS Case (NDA)",
    type: "Commercial automotive DMS",
    role: "Frontend / fullstack-oriented developer",
    content: {
      ru: {
        context: [
          "Этот кейс связан с коммерческой automotive DMS/admin-платформой под NDA: управлением дилерами, пользователями, rooftop-структурой, ролями, уровнями доступа и embed-сценариями.",
          "Изначально я подключался к проекту как frontend-разработчик, но постепенно начал закрывать задачи шире: не только интерфейсы, но и backend-логику, API-контракты, валидацию данных и связь frontend с серверной частью.",
          "Платформа проектировалась как универсальное решение для нескольких дилеров одновременно. Каждый дилер может использовать собственные настройки брендинга и темы, а пользователи внутри организации получают разные уровни доступа и сценарии работы в зависимости от своей роли.",
        ],
        responsibilities: [
          "Разрабатывал frontend-часть административной платформы: пользовательские сценарии, структуру интерфейсов, таблицы, формы и состояния экранов.",
          "Реализовывал функциональность для дилеров, rooftop-структуры, пользователей, ролей и уровней доступа, включая frontend-интерфейсы и backend-логику под эти сценарии.",
          "Работал с backend-частью задач: endpoints, валидацией, сохранением и обновлением данных, API-контрактами и передачей корректного состояния обратно на frontend.",
          "Собирал механизм white-label кастомизации: настройки темы, preview-сценарии и интеграцию Ant Design theme tokens для адаптации интерфейса под каждого дилера.",
          "Переводил embed-интерфейсы с Tailwind-подхода на Ant Design компоненты и токены, чтобы сделать тему управляемой, масштабируемой и связанной с backend-настройками.",
        ],
        engineeringFocus: [
          "Fullstack-подход к задачам: от admin UI и пользовательского сценария до backend API, валидации и сохранения данных.",
          "Ролевая модель и разделение доступа на уровне frontend и backend.",
          "Административные интерфейсы для управления дилерами, пользователями и структурой организации.",
          "White-label архитектура: backend-настройки темы, Ant Design theme tokens и preview кастомного оформления.",
          "Миграция UI-подхода с Tailwind/manual styles к Ant Design компонентам там, где это нужно для управляемой темы.",
        ],
        result:
          "В результате кейс показывает мой рост от frontend-задач к fullstack-разработке внутри коммерческой automotive DMS/admin-платформы: admin UI, роли и доступы, backend API, white-label настройки, embed-сценарии и аккуратное развитие production-кода.",
      },
      en: {
        context: [
          "This case is connected to a commercial automotive DMS/admin platform under NDA: dealer management, users, rooftop structure, roles, access levels, and embedded flows.",
          "I initially joined the project as a frontend developer, but gradually started covering broader tasks: not only interfaces, but also backend logic, API contracts, data validation, and the connection between frontend and server-side functionality.",
          "The platform was designed as a shared solution for multiple dealers. Each dealer can use its own branding and theme settings, while users inside the organization receive different permissions and workflows based on their role.",
        ],
        responsibilities: [
          "Developed the frontend part of the administrative platform: user flows, interface structure, tables, forms, and screen states.",
          "Implemented functionality for dealers, rooftop structure, users, roles, and access levels, including frontend interfaces and backend logic for these scenarios.",
          "Worked on the backend side of tasks: endpoints, validation, creating and updating data, API contracts, and returning the correct state back to the frontend.",
          "Built the white-label customization flow: theme settings, preview scenarios, and Ant Design theme token integration to adapt the interface for each dealer.",
          "Migrated embed interfaces from a Tailwind-based approach to Ant Design components and tokens to make the theme manageable, scalable, and connected to backend settings.",
        ],
        engineeringFocus: [
          "A fullstack approach to tasks: from admin UI and user flows to backend APIs, validation, and data persistence.",
          "Role model and access separation across frontend and backend.",
          "Administrative interfaces for managing dealers, users, and organization structure.",
          "White-label architecture: backend-driven theme settings, Ant Design theme tokens, and custom appearance preview.",
          "Migrating UI from Tailwind/manual styles to Ant Design components where it was needed for a manageable theme system.",
        ],
        result:
          "The result is a case that shows my growth from frontend tasks to fullstack development inside a commercial automotive DMS/admin platform: admin UI, roles and access levels, backend APIs, white-label settings, embedded flows, and careful production code evolution.",
      },
    },
  },
  bookflow: {
    slug: "bookflow",
    title: "BookFlow",
    type: "Commercial booking & service management platform",
    role: "Fullstack / freelance developer",
    content: {
      ru: {
        context: [
          "BookFlow — коммерческая платформа для управления услугами, пользователями и процессом бронирования.",
          "Задача была не просто собрать страницу, а сделать понятный fullstack-сценарий: показать услуги, преимущества, контактные данные, принять заявку на запись и подготовить данные для обработки на стороне приложения.",
          "Основной акцент был на связке frontend и backend: понятный пользовательский путь от первого экрана до заявки, корректная обработка введённых данных и подготовка проекта к дальнейшему развитию как системы записи.",
        ],
        responsibilities: [
          "Разрабатывал проект с нуля, проектировал структуру backend-части и участвовал в построении fullstack-архитектуры приложения.",
          "Реализовывал модели пользователей, услуг и бронирований, проектировал связи между сущностями и структуру данных в PostgreSQL.",
          "Создавал API, маршруты, валидацию и бизнес-логику, необходимую для работы сценариев бронирования и управления услугами.",
          "Подготовил fullstack-сценарий заявки/записи: понятные CTA на frontend, обработку данных заявки, базовую валидацию и структуру для дальнейшей работы с бронированиями.",
          "Работал над backend-частью проекта: API-структурой, обработкой формы записи и подготовкой данных так, чтобы frontend и backend работали как единый пользовательский сценарий.",
        ],
        engineeringFocus: [
          "Fullstack-сценарий записи: от landing page и CTA до обработки данных заявки на backend-стороне.",
          "Структура коммерческого лендинга: понятная подача услуги, преимущества, контактный блок и путь к записи.",
          "Адаптивная frontend-вёрстка, форма заявки, базовая валидация и аккуратная работа с состояниями интерфейса.",
          "Переиспользуемая структура блоков и API-сценария, которую можно расширять под похожие service-based проекты.",
          "Практический freelance-подход: быстро понять задачу клиента, собрать рабочий fullstack-сценарий и довести проект до понятного результата.",
        ],
        result:
          "В результате получился коммерческий fullstack-проект для freelance-клиента: landing page для представления beauty-услуг, пользовательский сценарий записи и backend-основа для обработки заявок и дальнейшего развития системы бронирования.",
      },
      en: {
        context: [
          "BookFlow is a commercial platform for managing services, users, and booking workflows.",
          "The task was not just to build a page, but to create a clear fullstack flow: present the services, show the value, collect a booking request, and prepare the data for processing inside the application.",
          "The main focus was the connection between frontend and backend: a clear user path from the first screen to a request, correct handling of submitted data, and a structure that could later grow into a booking system.",
        ],
        responsibilities: [
          "Built the project from scratch, designed the backend structure, and contributed to the fullstack architecture of the application.",
          "Implemented user, service, and booking models, designed entity relationships, and structured data in PostgreSQL.",
          "Created APIs, routes, validation, and business logic needed for booking scenarios and service management.",
          "Prepared the booking/request flow with clear frontend CTAs, request data handling, basic validation, and a structure for future booking-related functionality.",
          "Worked on the backend side of the project: API structure, booking form processing, and data preparation so the frontend and backend worked as one user flow.",
        ],
        engineeringFocus: [
          "Fullstack booking flow: from landing page and CTA to backend-side request processing.",
          "Commercial landing structure: clear service presentation, benefits, contact section, and path to booking.",
          "Responsive frontend layout, request form, basic validation, and careful work with interface states.",
          "Reusable section and API flow structure that can be extended for similar service-based projects.",
          "Practical freelance approach: understand the client's task quickly, build a working fullstack flow, and deliver a clear result.",
        ],
        result:
          "The result is a commercial fullstack project for a freelance client: a landing page for presenting beauty services, a user booking flow, and a backend foundation for processing requests and further developing the booking system.",
      },
    },
  },
};
