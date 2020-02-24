import HttpError from "./http-error";

export default class ServerError extends HttpError {
  constructor() {
    super(500, "Internal Server Error");
  }
}
