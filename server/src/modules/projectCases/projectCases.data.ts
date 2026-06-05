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
    title: "Vin Backbone",
    type: "Commercial data & analytics platform",
    role: "Frontend / fullstack-oriented developer",
    content: {
      ru: {
        context: [
          "Vin Backbone — коммерческая платформа для работы с автомобильным рынком, inventory-данными дилеров и аналитическими сценариями.",
          "Проект создавался с нуля на основе бизнес-требований и постепенно вырос в платформу, которая объединяет данные из различных источников, помогает анализировать состояние рынка, сравнивать предложения дилеров, работать с бизнес-метриками и принимать решения на основе данных.",
          "Frontend в проекте тесно связан с аналитикой, backend-сервисами и обработкой больших объёмов информации. Пользовательские сценарии строятся вокруг данных, метрик и сравнительного анализа рынка, поэтому интерфейсы должны не только отображать информацию, но и помогать быстро находить и интерпретировать её.",
        ],
        responsibilities: [
          "Участвовал в развитии проекта с момента, когда существовало только техническое задание, разрабатывал frontend платформы и реализовывал ключевые интерфейсы продукта.",
          "Разрабатывал экраны для работы с inventory, аналитикой, пользователями, payment requests и внутренними бизнес-процессами компании.",
          "Реализовывал пользовательские сценарии, связанные с фильтрацией, поиском, аналитикой, метриками и представлением больших объёмов данных.",
          "Участвовал в проектировании API-контрактов и интеграции frontend и backend для аналитических, продуктовых и бизнес-сценариев системы.",
        ],
        engineeringFocus: [
          "Data-driven интерфейсы и аналитические сценарии работы с автомобильными данными.",
          "Работа с inventory, дилерскими данными, бизнес-метриками и аналитическими представлениями информации.",
          "Связь frontend с backend API, контрактами данных и процессами агрегации информации.",
          "TanStack Query, фильтрация, пагинация, состояния загрузки и другие механики, необходимые для стабильной работы data-driven интерфейсов.",
        ],
        result:
          "В результате Vin Backbone стал рабочей data-driven платформой для анализа дилерского inventory, рыночных показателей и внутренних бизнес-процессов. Проект показывает мой опыт в создании сложных frontend-интерфейсов, которые связывают данные, аналитику, backend API и реальные продуктовые сценарии.",
      },
      en: {
        context: [
          "Vin Backbone is a commercial platform focused on automotive market data, dealer inventory, and analytics workflows.",
          "The project combines data from multiple sources, helps analyze market conditions, compare dealer offerings, work with business metrics, and support data-driven decisions.",
          "The frontend is tightly connected to analytics, backend services, and large-scale data processing, so a significant part of the work involves not only presenting information but also supporting how data is collected, aggregated, and used across the product.",
        ],
        responsibilities: [
          "Contributed to the frontend development of the platform from its early stages and implemented key product interfaces.",
          "Built screens for inventory management, analytics, users, payment requests, and internal business workflows.",
          "Implemented user flows related to filtering, search, analytics, metrics, and large-scale data presentation.",
          "Participated in API contract design and frontend/backend integration to support analytics and business-critical workflows.",
        ],
        engineeringFocus: [
          "Data-driven interfaces and analytics workflows built around automotive market data.",
          "Working with inventory, dealer data, business metrics, and analytical views of information.",
          "Connecting frontend applications with backend APIs, data contracts, and aggregation processes.",
          "Designing interfaces that help users work efficiently with large amounts of data while maintaining a predictable user experience.",
        ],
        result:
          "The result is a production data-driven platform for analyzing dealer inventory, market metrics, and internal business workflows. The project demonstrates my experience in building complex frontend interfaces that connect data, analytics, backend APIs, and real product scenarios.",
      },
    },
  },
  "dealer-intelligence": {
    slug: "dealer-intelligence",
    title: "Dealer Intelligence",
    type: "Commercial admin & access platform",
    role: "Frontend / fullstack-oriented developer",
    content: {
      ru: {
        context: [
          "Dealer Intelligence — коммерческая платформа для управления дилерами, пользователями, rooftop-структурой и embed-решениями для автомобильного бизнеса.",
          "Проект создавался с нуля как административная система с разделением ролей и уровней доступа, где разные пользователи работают с разными частями продукта в зависимости от своих полномочий.",
          "Платформа проектировалась как универсальное решение для нескольких дилеров одновременно. Каждый дилер может использовать собственные настройки брендинга и темы, а пользователи внутри организации получают разные уровни доступа и сценарии работы в зависимости от своей роли.",
        ],
        responsibilities: [
          "Разрабатывал проект с нуля: собирал frontend-часть административной платформы, продумывал пользовательские сценарии и структуру интерфейсов.",
          "Реализовывал функциональность для дилеров, rooftop-структуры, пользователей, ролей и уровней доступа, включая frontend-интерфейсы и backend-логику под эти сценарии.",
          "Собирал механизм white-label кастомизации: настройки темы, preview-сценарии и интеграцию Ant Design theme tokens для адаптации интерфейса под каждого дилера.",
          "Переводил embed-интерфейсы с Tailwind-подхода на Ant Design компоненты и токены, чтобы сделать тему управляемой, масштабируемой и связанной с backend-настройками.",
        ],
        engineeringFocus: [
          "Ролевая модель и разделение доступа на уровне frontend и backend.",
          "Административные интерфейсы для управления дилерами, пользователями и структурой организации.",
          "White-label архитектура: backend-настройки темы, Ant Design theme tokens и preview кастомного оформления.",
          "Миграция UI-подхода с Tailwind/manual styles к Ant Design компонентам там, где это нужно для управляемой темы.",
        ],
        result:
          "В результате получилась единая платформа для нескольких дилеров, которая объединяет управление пользователями, ролями, уровнями доступа, embed-решениями и индивидуальной настройкой интерфейса. Проект показывает мой опыт в создании frontend-интерфейсов с backend-логикой, ролевой моделью и масштабируемой white-label архитектурой.",
      },
      en: {
        context: [
          "Dealer Intelligence is a commercial platform for managing dealers, users, rooftop structures, and embedded solutions for the automotive business.",
          "The project was built from scratch as an administrative system with roles and access levels, where different users interact with different parts of the product based on their permissions.",
          "The platform was designed as a shared solution for multiple dealers. Each dealer can use its own branding and theme settings, while users inside the organization receive different permissions and workflows based on their role.",
        ],
        responsibilities: [
          "Built the project from scratch: developed the frontend part of the administrative platform, shaped user flows, and structured product interfaces.",
          "Implemented functionality for dealers, rooftop structure, users, roles, and access levels, including frontend interfaces and backend logic for these scenarios.",
          "Built the white-label customization flow: theme settings, preview scenarios, and Ant Design theme token integration to adapt the interface for each dealer.",
          "Migrated embed interfaces from a Tailwind-based approach to Ant Design components and tokens to make the theme manageable, scalable, and connected to backend settings.",
        ],
        engineeringFocus: [
          "Role model and access separation across frontend and backend.",
          "Administrative interfaces for managing dealers, users, and organization structure.",
          "White-label architecture: backend-driven theme settings, Ant Design theme tokens, and custom appearance preview.",
          "Migrating UI from Tailwind/manual styles to Ant Design components where it was needed for a manageable theme system.",
        ],
        result:
          "The result is a shared platform for multiple dealers that combines user management, roles, access levels, embedded solutions, and dealer-specific interface customization. The project demonstrates my experience in building frontend interfaces connected to backend logic, role-based access, and scalable white-label architecture.",
      },
    },
  },
  bookflow: {
    slug: "bookflow",
    title: "BookFlow",
    type: "Commercial booking & service management platform",
    role: "Frontend / fullstack-oriented developer",
    content: {
      ru: {
        context: [
          "BookFlow — коммерческая платформа для управления услугами, пользователями и процессом бронирования.",
          "Проект объединяет клиентские сценарии записи на услуги, управление доступными сервисами и обработку данных, необходимых для работы системы бронирования.",
          "Основной акцент в проекте сделан на бизнес-логике, связях между сущностями и корректной работе пользовательского сценария от выбора услуги до создания бронирования.",
        ],
        responsibilities: [
          "Разрабатывал проект с нуля, проектировал структуру backend-части и участвовал в построении fullstack-архитектуры приложения.",
          "Реализовывал модели пользователей, услуг и бронирований, проектировал связи между сущностями и структуру данных в PostgreSQL.",
          "Создавал API, маршруты, валидацию и бизнес-логику, необходимую для работы сценариев бронирования и управления услугами.",
          "Готовил backend-контракты и структуру приложения таким образом, чтобы frontend и backend развивались как единая система.",
        ],
        engineeringFocus: [
          "Backend-архитектура и проектирование бизнес-домена вокруг услуг и бронирований.",
          "PostgreSQL, моделирование данных и связи между сущностями системы.",
          "API-контракты, валидация данных и реализация бизнес-логики.",
          "Fullstack-подход, при котором frontend и backend проектируются как части одного продукта.",
        ],
        result:
          "В результате получилась платформа для управления услугами и бронированиями, которая демонстрирует мой опыт работы с backend-архитектурой, бизнес-логикой, базами данных и fullstack-разработкой за пределами пользовательского интерфейса.",
      },
      en: {
        context: [
          "BookFlow is a commercial platform for managing services, users, and booking workflows.",
          "The project combines customer-facing booking scenarios, service management, and the data processing needed for a functional booking system.",
          "The main focus of the project is business logic, entity relationships, and a complete user flow from selecting a service to creating a booking.",
        ],
        responsibilities: [
          "Built the project from scratch, designed the backend structure, and contributed to the fullstack architecture of the application.",
          "Implemented user, service, and booking models, designed entity relationships, and structured data in PostgreSQL.",
          "Created APIs, routes, validation, and business logic needed for booking scenarios and service management.",
          "Prepared backend contracts and application structure so the frontend and backend could evolve as a single product system.",
        ],
        engineeringFocus: [
          "Backend architecture and business domain design around services and bookings.",
          "PostgreSQL, data modeling, and relationships between system entities.",
          "API contracts, data validation, and business logic implementation.",
          "A fullstack approach where frontend and backend are designed as parts of one product.",
        ],
        result:
          "The result is a service and booking management platform that demonstrates my experience with backend architecture, business logic, databases, and fullstack development beyond the user interface.",
      },
    },
  },
};
