import cors from "cors";
import express from "express";

import { aiRouter } from "./modules/ai/index.js";
import { contactRouter } from "./modules/contact/index.js";
import { env } from "./shared/config/env.js";
import { errorHandler } from "./shared/errors/errorHandler.js";

export const app = express();

app.use(
  cors({
    origin: env.clientUrl,
  }),
);

app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({
    status: "ok",
    message: "Developer landing API is running",
  });
});

app.use("/api/contact", contactRouter);
app.use("/api/ai", aiRouter);

app.use(errorHandler);
