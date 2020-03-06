import * as neo4j from "neo4j-driver";
import { neoConfig } from "../config";

const driver = neo4j.driver(
  `${neoConfig.protocol}://${neoConfig.host}:${neoConfig.port}`,
  neo4j.auth.basic(neoConfig.username, neoConfig.password)
);

/**
 * All data model used by neo4j database should use this class
 */
export default abstract class NeoModel<T> {

  public async execute(cypher: string) {
    const session = driver.session();
    let res: neo4j.QueryResult;
    let err;
    try {
      res = await session.run(cypher);
    } catch (error) {
      err = error;
    } finally {
      session.close();
    }
    if (err) {
      throw err;
    }
    return res;
  }

  public async abstract match(): Promise<T[]>;
  public async abstract create(): Promise<void>;
}
