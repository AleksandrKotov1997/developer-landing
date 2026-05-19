import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

import { ApiError } from "./ApiError.js";

export const errorHandler: ErrorRequestHandler = (
  error,
  _request,
  response,
  _next,
) => {
  console.error(error);

  if (error instanceof ZodError) {
    response.status(422).json({
      message: "Validation error",
      errors: error.issues,
    });

    return;
  }

  if (error instanceof ApiError) {
    response.status(error.statusCode).json({
      message: error.message,
    });

    return;
  }

  response.status(500).json({
    message: "Internal server error",
  });
};
