import { Response, Request, NextFunction } from "express";
import HttpError from "./http-error";

export interface ParamsDictionary {
  [key: string]: string;
}

export interface IdParam extends ParamsDictionary {
  id: string;
}

export function checkFields(obj: {}, ...fields: string[]): string[] {
  const missing: string[] = [];
  for (const field of fields) {
    if (!obj[field]) {
      missing.push(field);
    }
  }
  return missing;
}

export function createCheckFieldMiddleware(...fields: string[]): (req: Request, res: Response, next: NextFunction) => void {
  return (req, res, next): void => {
    console.log(fields, req.body);
    const missing = checkFields(req.body, ...fields);
    if (missing.length === 0) {
      next();
      return;
    }
    next(new HttpError(422, `Missing fields: ${missing.join()}`));
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
  console.error(err);
  if (err instanceof HttpError) {
    if (!err.message) {
      res.sendStatus(err.code);
    } else {
      res.status(err.code);
      res.send(err.message);
    }
  } else {
    res.sendStatus(500);
  }
}
