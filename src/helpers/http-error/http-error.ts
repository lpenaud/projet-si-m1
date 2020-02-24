import { IHttpError } from "../../../lib/errors";

/**
 * JS Error with a status code
 */
export default abstract class HttpError extends Error implements IHttpError {

  /**
   * Status code to send
   */
  public readonly code: number;

  /**
   * Construct a error with a status code and an optional message
   * @param code Status code
   * @param message Message to error
   */
  constructor(code: number, message?: string) {
    super(message);
    this.code = code;
  }

  /**
   * JSON representation of the object to send to reponse
   */
  public toJSON(): IHttpError {
    return {
      code: this.code,
      message: this.message,
    };
  }
}
