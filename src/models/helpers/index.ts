import { Sequelize } from "sequelize-typescript";
import { DatabaseConfig, nodeEnv } from "../../config";
import { URL } from "url";

export async function setupMaria(s: Sequelize): Promise<void> {
  try {
    if (nodeEnv === "local") {
      await s.sync({ alter: true })
    } else {
      await s.authenticate();
    }
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export function createMongoUrl(config: DatabaseConfig): string {
  const url = new URL(`mongodb://${config.host}`);
  url.port = `${config.port}`;
  url.username = config.username;
  url.password = config.password;
  url.pathname = config.database;
  return url.href;
}
