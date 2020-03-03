import { connect } from "./config";
import { HttpError } from "./error";
import { ILesson } from "../../../lib/models";

const connection = connect({
  baseURL: "/lesson"
});

type lessonNameId = Pick<ILesson, "id" | "name">;

export async function getLessons(): Promise<lessonNameId[]> {
  const res = await connection.get<lessonNameId[]>("");
  if (res.status >= 400) {
    throw new HttpError(res);
  }
  return res.data;
}
