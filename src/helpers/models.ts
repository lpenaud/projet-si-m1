import { Sequelize } from "sequelize-typescript";
import { DatabaseConfig, nodeEnv, environments } from "../config";
import { URL } from "url";
import { connect } from "mongoose";

export async function setupMaria(s: Sequelize): Promise<void> {
  try {
    if (nodeEnv === environments.local) {
      await s.sync({ force: true, logging: true });
    } else {
      await s.authenticate();
    }
  } catch (error) {
    console.log("Unable to connect to the MariaDB database:");
    console.error(error);
  }
}

export async function connectMongo(config: DatabaseConfig): Promise<void> {
  const url = new URL(`mongodb://${config.host}:${config.port}/${config.database}`);
  url.username = config.username;
  url.password = config.password;
  try {
    await connect(url.href, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.log("Unable to connect to the mongodb");
    console.error(error);
  }
}
