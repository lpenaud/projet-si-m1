/* eslint-disable @typescript-eslint/interface-name-prefix */
export interface IHttpError {
  code: number;
  message: string;
}

export interface IMissingFieldsError extends IHttpError {
  missingFields: string[];
}

export interface IUnknownIdError extends IHttpError {
  id: number;
  table: string;
}
