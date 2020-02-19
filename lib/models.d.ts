export interface Book {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _id: any;
  title: string;
  author: string;
  genre?: string;
}

export interface Learner {
  id: number;
  name: string;
  lastName: string;
  email: string;
}

export interface Trainer {
  id: number;
  name: string;
  lastName: string;
  email: string;
}

//TODO: Referent - Correspondance avec la table module dans Neo4J :)
// TODO: Formation - Lien avec module et apprenants
