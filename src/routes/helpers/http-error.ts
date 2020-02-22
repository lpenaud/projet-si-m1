export default class HttpError extends Error {
  public readonly code: number;

  constructor(code: number, message?: string) {
    super(message);
    Error.captureStackTrace(this, HttpError);
    this.code = code;
  }
}
