/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */

export interface ILearner {
  id: number;
  name: string;
  lastName: string;
  email: string;
}

export interface ITrainer {
  id: number;
  name: string;
  lastName: string;
  email: string;
}

export interface ILesson {
  _id: any;
  name: string;
  idTrainer: number;
}
