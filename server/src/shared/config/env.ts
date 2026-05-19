export const env = {
  port: process.env.PORT ?? "4000",
  clientUrl: process.env.CLIENT_URL ?? "http://localhost:5173",

  mail: {
    host: process.env.MAIL_HOST ?? "",
    port: Number(process.env.MAIL_PORT ?? 587),
    user: process.env.MAIL_USER ?? "",
    password: process.env.MAIL_PASSWORD ?? "",
    from: process.env.MAIL_FROM ?? "",
    to: process.env.MAIL_TO ?? "kotov.aleksandr.9797@mail.ru",
  },
};
