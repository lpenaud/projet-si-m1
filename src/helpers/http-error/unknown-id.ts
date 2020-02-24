import HttpError from "./http-error";
import { IUnknownIdError } from "../../../lib/errors";

export default class UnknownIdError extends HttpError implements IUnknownIdError {
  public readonly id: number;
  public readonly table: string;

  constructor(id: number, table: string) {
    super(418, `Unknown ${table} with this id: ${id}`);
    this.id = id;
    this.table = table;
  }

  public toJSON(): IUnknownIdError {
    return {
      ...super.toJSON(),
      id: this.id,
      table: this.table,
    };
  }
}
