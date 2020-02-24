/* eslint-disable @typescript-eslint/no-unused-vars */
import HttpError from "./http-error/http-error";
import { Request, Response, NextFunction } from "express";
import ServerError from "./http-error/server";

export function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction): void {
  const httpErr = err instanceof HttpError ? err : new ServerError();
  console.error(err);
  res.status(httpErr.code).json(httpErr.toJSON());
}
