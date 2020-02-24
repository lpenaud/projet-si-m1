import { Sequelize } from "sequelize-typescript";
import { DatabaseConfig, nodeEnv, environments } from "../config";
import { URL } from "url";

export async function setupMaria(s: Sequelize): Promise<void> {
  try {
    if (nodeEnv === environments.local) {
      await s.sync({ force: true, logging: true });
    } else {
      await s.authenticate();
    }
  } catch (error) {
    console.error("Unable to connect to the MariaDB database:", error);
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
