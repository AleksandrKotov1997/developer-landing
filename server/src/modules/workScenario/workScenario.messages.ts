import type {
  Language,
  ProjectContext,
  TaskType,
  Tone,
} from "./workScenario.types.js";

type WorkScenarioMessages = Record<
  Language,
  Record<TaskType, Record<ProjectContext, Record<Tone, string>>>
>;

export const workScenarioMessages: WorkScenarioMessages = {
  ru: {
    adminUi: {
      existingProject: {
        professional:
          "В существующем admin UI я сначала разберу текущую структуру экрана, переиспользуемые компоненты и правила работы с данными. После этого добавлю изменение в рамках уже принятого паттерна, чтобы интерфейс выглядел цельно и не ломал привычный сценарий пользователя.",
        friendly:
          "В такой задаче я не буду сразу переписывать экран с нуля. Сначала посмотрю, как в проекте уже сделаны похожие таблицы, формы или модальные окна, а потом добавлю нужный кусок так, чтобы команда легко узнала свой текущий стиль и поведение.",
        direct:
          "Подключусь к существующему admin UI: посмотрю текущие компоненты, добавлю нужные таблицы, фильтры, формы или модалки, сохраню общий паттерн и проверю основной сценарий.",
      },
      newFeature: {
        professional:
          "Для новой admin UI фичи я сначала уточню, какую задачу решает экран, какие данные нужны пользователю и какие состояния должны быть предусмотрены. Затем соберу интерфейс так, чтобы он сразу вписался в структуру проекта и был понятен для дальнейшего расширения.",
        friendly:
          "Если нужно добавить новую admin UI фичу, я начну не с разметки, а со сценария: что пользователь видит, выбирает, отправляет и получает в ответ. После этого соберу экран с нужными состояниями, чтобы он ощущался частью продукта, а не отдельной вставкой.",
        direct:
          "Соберу новую admin UI фичу: уточню сценарий, подготовлю таблицы, фильтры, формы или модалки, добавлю состояния данных и проверю, что экран работает как цельный пользовательский flow.",
      },
      refactor: {
        professional:
          "В admin UI рефакторинге я сначала зафиксирую текущее поведение экрана и найду места, где структура стала сложной или повторяющейся. После этого упрощу компоненты без изменения пользовательского сценария и проверю, что таблицы, формы, модальные окна и состояния работают как раньше.",
        friendly:
          "В такой задаче я не буду менять admin UI просто ради чистого кода. Сначала пойму, что уже работает для пользователя и команды, а затем аккуратно уберу лишнюю сложность так, чтобы поведение осталось привычным.",
        direct:
          "Помогу с рефакторингом admin UI: сохраню текущее поведение, уберу лишние повторы, приведу компоненты к общему паттерну и проверю основные сценарии.",
      },
    },
    formsValidation: {
      existingProject: {
        professional:
          "В существующих формах я сначала разберу текущие поля, правила валидации, submit-flow и обработку ошибок. Затем доработаю сценарий так, чтобы пользователь видел понятные состояния, не терял введённые данные и понимал, что нужно исправить.",
        friendly:
          "Если форма уже есть в проекте, я сначала посмотрю, как она сейчас ведёт себя при вводе, ошибках и отправке. После этого помогу сделать её спокойнее для пользователя: с понятными подсказками, состояниями загрузки и предсказуемым результатом.",
        direct:
          "Помогу с существующей формой: проверю поля, валидацию, ошибки и submit-flow, поправлю loading/disabled states и протестирую отправку данных.",
      },
      newFeature: {
        professional:
          "Для новой формы я сначала определю структуру данных, обязательные поля, правила валидации и ожидаемый результат отправки. Затем соберу flow с понятными ошибками, loading/disabled states и успешным состоянием после ответа сервера.",
        friendly:
          "Когда нужна новая форма, я начинаю с вопроса: какие данные пользователь вводит и что должно произойти после отправки. Потом собираю форму так, чтобы ошибки были понятными, кнопки не вводили в заблуждение, а результат был очевиден.",
        direct:
          "Соберу новую форму: определю поля и правила, добавлю валидацию, обработаю ошибки, loading/disabled states и проверю успешную отправку.",
      },
      refactor: {
        professional:
          "В рефакторинге форм я сначала сохраняю текущую бизнес-логику и проверяю, какие состояния уже используются. Затем упрощаю структуру, выравниваю обработку ошибок и делаю сценарий отправки более читаемым без изменения ожидаемого поведения.",
        friendly:
          "Если форма стала тяжёлой в поддержке, я сначала отделю важную бизнес-логику от лишней сложности. После этого аккуратно упрощу код, сохранив привычное поведение и понятные ошибки для пользователя.",
        direct:
          "Помогу с рефакторингом формы: сохраню поведение, упрощу структуру, приведу ошибки и состояния к одному паттерну и проверю submit-flow.",
      },
    },
    tablesData: {
      existingProject: {
        professional:
          "В существующем data UI я сначала разберу текущие таблицы, фильтры, пагинацию и состояния загрузки данных. Затем доработаю отображение так, чтобы empty/loading/error states были понятны пользователю и не нарушали уже работающие сценарии.",
        friendly:
          "Если в проекте уже есть таблицы и фильтры, я сначала посмотрю, где пользователю может быть неудобно: пустой список, ошибка, загрузка или сброс фильтров. Потом помогу сделать экран с данными понятнее без резкой смены привычного поведения.",
        direct:
          "Помогу с существующим data UI: разберу таблицы, фильтры и пагинацию, поправлю состояния данных и проверю пользовательский сценарий.",
      },
      newFeature: {
        professional:
          "Для новой data UI фичи я сначала определю, какие данные нужно показать, как они фильтруются и как пользователь будет перемещаться по списку. Затем соберу таблицу, пагинацию, фильтры и состояния loading/empty/error в едином понятном сценарии.",
        friendly:
          "Если нужно добавить новый экран с данными, я начну с того, что именно пользователь должен найти, сравнить или отфильтровать. После этого соберу таблицу, фильтры, пагинацию и состояния так, чтобы экран был понятен с первого открытия.",
        direct:
          "Соберу новую data UI фичу: таблицу, фильтры, пагинацию, loading/empty/error states и проверку сценария работы с данными.",
      },
      refactor: {
        professional:
          "В рефакторинге data UI я сначала фиксирую текущее поведение таблиц, фильтров и пагинации. Затем упрощаю структуру, убираю дублирование и выравниваю состояния данных, чтобы интерфейс было проще поддерживать без потери привычного flow.",
        friendly:
          "Если таблицы и фильтры стали тяжёлыми в поддержке, я начну с проверки текущего поведения. Потом аккуратно разложу логику по понятным местам, чтобы пользователю ничего не сломать, а команде стало проще работать с экраном.",
        direct:
          "Помогу с рефакторингом data UI: сохраню поведение таблиц и фильтров, упрощу структуру, приведу состояния данных к одному паттерну и проверю сценарий.",
      },
    },
    apiIntegration: {
      existingProject: {
        professional:
          "В существующем проекте я сначала разберу текущие API-контракты, типы данных, места вызовов и обработку ошибок. Затем подключу интерфейс к нужным endpoint'ам так, чтобы request states были понятны, а сценарий стабильно работал при успехе и сбое.",
        friendly:
          "Если API уже используется в проекте, я сначала посмотрю, как устроены запросы, ошибки и состояния загрузки. Потом помогу подключить нужный UI так, чтобы он спокойно работал с данными и понятно реагировал на сбои.",
        direct:
          "Помогу с API-интеграцией: разберу текущие контракты, подключу запросы, обработаю loading/error/success states и проверю сценарий в браузере.",
      },
      newFeature: {
        professional:
          "Для новой API-интеграции я сначала согласую формат данных, состояния запроса и ожидаемое поведение интерфейса. Затем подключу endpoint, обработаю успешный и ошибочный сценарии и проверю, что UI корректно работает с backend-контрактом.",
        friendly:
          "Если нужно подключить новую фичу к API, я начну с понимания контракта: какие данные приходят, что отправляем и как показываем ошибки. После этого свяжу UI с backend так, чтобы пользователь видел понятные состояния на каждом шаге.",
        direct:
          "Подключу новую API-интеграцию: согласую формат данных, добавлю request states, обработаю ошибки и проверю успешный сценарий.",
      },
      refactor: {
        professional:
          "В рефакторинге API-интеграции я сначала проверяю текущие контракты, места вызовов и обработку ошибок. Затем упрощаю работу с запросами, выравниваю состояния и сохраняю поведение интерфейса для пользователя.",
        friendly:
          "Если API-логика стала запутанной, я начну с того, где именно используются данные и какие состояния уже есть. Потом аккуратно упрощу интеграцию, чтобы код стал понятнее, а пользовательский сценарий остался стабильным.",
        direct:
          "Помогу с рефакторингом API-интеграции: сохраню контракты, упрощу запросы, выровняю состояния ошибок и загрузки, проверю основной сценарий.",
      },
    },
  },
  en: {
    adminUi: {
      existingProject: {
        professional:
          "In an existing admin UI, I would first review the current screen structure, reusable components, and data-handling rules. Then I would add the change within the established pattern, so the interface feels consistent and does not break the user's familiar flow.",
        friendly:
          "For this kind of task, I would not start by rewriting the screen from scratch. I would first look at how similar tables, forms, or modals are already built in the project, then add the needed part in a way that still feels familiar to the team.",
        direct:
          "I would join the existing admin UI, review the current components, add the needed tables, filters, forms, or modals, keep the shared pattern, and check the main scenario.",
      },
      newFeature: {
        professional:
          "For a new admin UI feature, I would first clarify what problem the screen solves, what data the user needs, and which states should be covered. Then I would build the interface so it fits the project structure and remains easy to extend later.",
        friendly:
          "If a new admin UI feature is needed, I would start with the scenario, not with the markup: what the user sees, selects, submits, and gets back. Then I would build the screen with the needed states so it feels like part of the product, not a separate insert.",
        direct:
          "I would build the new admin UI feature: clarify the scenario, prepare the tables, filters, forms, or modals, add data states, and check that the screen works as one clear user flow.",
      },
      refactor: {
        professional:
          "For an admin UI refactor, I would first lock down the current screen behavior and find where the structure has become complex or repetitive. Then I would simplify the components without changing the user scenario and check that tables, forms, modals, and states still work as before.",
        friendly:
          "In this kind of task, I would not change the admin UI just for the sake of clean code. I would first understand what already works for users and the team, then carefully remove unnecessary complexity while keeping the behavior familiar.",
        direct:
          "I would help refactor the admin UI: preserve the current behavior, remove unnecessary duplication, align components with the shared pattern, and check the main scenarios.",
      },
    },
    formsValidation: {
      existingProject: {
        professional:
          "In existing forms, I would first review the current fields, validation rules, submit flow, and error handling. Then I would improve the scenario so the user sees clear states, keeps entered data, and understands what needs to be fixed.",
        friendly:
          "If the form already exists in the project, I would first check how it behaves during input, errors, and submission. Then I would help make it calmer for the user, with clear hints, loading states, and a predictable result.",
        direct:
          "I would help with the existing form: check fields, validation, errors, and submit flow, adjust loading and disabled states, and test data submission.",
      },
      newFeature: {
        professional:
          "For a new form, I would first define the data structure, required fields, validation rules, and the expected submission result. Then I would build the flow with clear errors, loading and disabled states, and a success state after the server response.",
        friendly:
          "When a new form is needed, I start with the question: what data does the user enter, and what should happen after submission? Then I build the form so errors are clear, buttons are not misleading, and the result is obvious.",
        direct:
          "I would build the new form: define fields and rules, add validation, handle errors, loading and disabled states, and check successful submission.",
      },
      refactor: {
        professional:
          "When refactoring forms, I first preserve the current business logic and check which states are already used. Then I simplify the structure, align error handling, and make the submit scenario easier to read without changing the expected behavior.",
        friendly:
          "If a form has become hard to maintain, I would first separate the important business logic from unnecessary complexity. Then I would carefully simplify the code while preserving familiar behavior and clear errors for the user.",
        direct:
          "I would help refactor the form: preserve behavior, simplify the structure, align errors and states with one pattern, and check the submit flow.",
      },
    },
    tablesData: {
      existingProject: {
        professional:
          "In an existing data UI, I would first review the current tables, filters, pagination, and data-loading states. Then I would improve the display so empty, loading, and error states are clear for the user and do not disrupt existing flows.",
        friendly:
          "If the project already has tables and filters, I would first look for places where the user may struggle: an empty list, an error, loading, or filter reset. Then I would help make the data screen clearer without abruptly changing familiar behavior.",
        direct:
          "I would help with the existing data UI: review tables, filters, and pagination, improve data states, and check the user scenario.",
      },
      newFeature: {
        professional:
          "For a new data UI feature, I would first define what data should be shown, how it is filtered, and how the user moves through the list. Then I would build the table, pagination, filters, and loading, empty, and error states as one clear scenario.",
        friendly:
          "If a new data screen is needed, I would start with what exactly the user needs to find, compare, or filter. Then I would build the table, filters, pagination, and states so the screen is understandable from the first opening.",
        direct:
          "I would build the new data UI feature: table, filters, pagination, loading, empty, and error states, plus a check of the data flow scenario.",
      },
      refactor: {
        professional:
          "When refactoring data UI, I first lock down the current behavior of tables, filters, and pagination. Then I simplify the structure, remove duplication, and align data states so the interface is easier to maintain without losing the familiar flow.",
        friendly:
          "If tables and filters have become hard to maintain, I would start by checking the current behavior. Then I would carefully move the logic into clearer places, so nothing breaks for the user and the screen becomes easier for the team to work with.",
        direct:
          "I would help refactor the data UI: preserve table and filter behavior, simplify the structure, align data states with one pattern, and check the scenario.",
      },
    },
    apiIntegration: {
      existingProject: {
        professional:
          "In an existing project, I would first review the current API contracts, data types, call sites, and error handling. Then I would connect the interface to the needed endpoints so request states are clear and the scenario works reliably on success and failure.",
        friendly:
          "If the API is already used in the project, I would first look at how requests, errors, and loading states are handled. Then I would help connect the needed UI so it works calmly with data and responds clearly to failures.",
        direct:
          "I would help with API integration: review current contracts, connect requests, handle loading, error, and success states, and check the scenario in the browser.",
      },
      newFeature: {
        professional:
          "For a new API integration, I would first align the data format, request states, and expected interface behavior. Then I would connect the endpoint, handle successful and failed scenarios, and check that the UI works correctly with the backend contract.",
        friendly:
          "If a new feature needs to be connected to the API, I would start by understanding the contract: what data comes in, what we send, and how we show errors. Then I would connect the UI with the backend so the user sees clear states at each step.",
        direct:
          "I would connect the new API integration: align the data format, add request states, handle errors, and check the successful scenario.",
      },
      refactor: {
        professional:
          "When refactoring API integration, I first check the current contracts, call sites, and error handling. Then I simplify request logic, align states, and preserve the interface behavior for the user.",
        friendly:
          "If the API logic has become confusing, I would start with where the data is used and which states already exist. Then I would carefully simplify the integration so the code becomes clearer and the user scenario stays stable.",
        direct:
          "I would help refactor API integration: preserve contracts, simplify requests, align error and loading states, and check the main scenario.",
      },
    },
  },
};
