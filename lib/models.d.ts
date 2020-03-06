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
  lessons?: ILesson[];
}

export interface ILesson {
  id: number;
  name: string;
  trainer?: ITrainer;
}

export interface IModule {
  name: string;
  submodules?: IModule[];
}
