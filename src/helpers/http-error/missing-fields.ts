import HttpError from "./http-error";
import { IMissingFieldsError } from "../../../lib/errors";

/**
 * Error to throw when user forget some required fields
 */
export default class MissingFieldsError extends HttpError implements IMissingFieldsError {

  /**
   * The required missing fields
   */
  public readonly missingFields: string[];

  /**
   * Create a error with the status code 422 when user missing some required fields
   * @param missingFields The required missing fields 
   */
  constructor(missingFields: string[]) {
    super(422, `Missing fields: ${missingFields.join()}`);
    this.missingFields = missingFields;
  }

  public toJSON(): IMissingFieldsError {
    return {
      ...super.toJSON(),
      missingFields: this.missingFields,
    };
  }
}
