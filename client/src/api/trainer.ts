import { connect } from "./config";
import { ITrainer } from "../../../lib/models";
import { WithRequired } from "../../../lib/utils";
import { HttpError } from "./error";

const connection = connect({
  baseURL: "/trainer"
});

export async function getTrainers() {
  const res = await connection.get<ITrainer[]>("/");
  if (res.status >= 300) {
    throw new HttpError(res);
  }
  return res.data;
}

export async function updateTrainer(trainer: WithRequired<ITrainer, "id">) {
  const res = await connection.put(`/${trainer.id}`, {
    email: trainer.email,
    lastName: trainer.lastName,
    name: trainer.name
  } as Omit<ITrainer, "id">);
  if (res.status >= 300) {
    throw new HttpError(res);
  }
}

export async function newTrainer(trainer: Omit<ITrainer, "id">) {
  const res = await connection.post<ITrainer>("/", trainer);
  if (res.status >= 300) {
    throw new HttpError(res);
  }
  return res.data;
}

export async function deleteTrainer(trainerId: number) {
  const res = await connection.delete(`/${trainerId}`);
  if (res.status >= 300) {
    throw new HttpError(res);
  }
}
