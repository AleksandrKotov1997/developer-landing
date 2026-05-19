import nodemailer from "nodemailer";

import { env } from "../config/env.js";

export const mailer = nodemailer.createTransport({
  host: env.mail.host,
  port: env.mail.port,
  secure: env.mail.port === 465,
  auth: {
    user: env.mail.user,
    pass: env.mail.password,
  },
});

export const isMailerConfigured = () => {
  return Boolean(
    env.mail.host &&
    env.mail.user &&
    env.mail.password &&
    env.mail.from &&
    env.mail.to,
  );
};
