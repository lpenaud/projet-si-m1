import { Sequelize } from "sequelize-typescript";
import { DatabaseConfig, mariaConfig } from "../../config";
import { URL } from "url";

export async function setupMaria(s: Sequelize): Promise<void> {
  try {
    switch (mariaConfig.sync) {
      case "force":
        await s.sync({ force: true });
        break;

      case "alter":
        await s.sync({ alter: true })
        break;

      default:
        await s.authenticate();
        break;
    }
    console.log("Connection has been established successfully.")
  } catch (error) {
    console.error('Unable to connect to the database:', error)
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
