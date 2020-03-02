export interface Dictionary {
  [key: string]: string;
}

export interface IdParam extends Dictionary {
  id: string;
}

export const idRegex = /d+/;
export const idParamRegex = `/:id(${idRegex})`;
export const objectIdParamRegex = "/:id(/^[0-9a-fA-F]{24}$/)";

export function checkFields<T>(dict: T, ...fields: Array<keyof T>): Array<keyof T> {
  return fields.filter((f) => !dict[f]);
}
