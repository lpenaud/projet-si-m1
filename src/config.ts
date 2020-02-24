import { config } from "dotenv";

config();

// Available Environments
export const environments: {[key: string]: symbol} = {
  local: Symbol("local"),
  production: Symbol("production"),
};

// Server config
export const port = Number(process.env.PORT) || 8080;
export const hostname = process.env.HOSTNAME || "0.0.0.0";
export const nodeEnv = environments[process.env.NODE_ENV || "local"];
export const timezone = process.env.TIMEZONE || "Etc/GMT-1";

export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
}

// MongoDB config
export const mongoConfig: DatabaseConfig = {
  host: process.env.MONGO_HOST || "localhost",
  port: Number(process.env.MONGO_PORT) || 27017,
  database: process.env.MONGO_DB || "SI",
  username: process.env.MONGO_USER || "",
  password: process.env.MONGO_PASSWORD || "",
};

// MariaDB config
export const mariaConfig: DatabaseConfig & { logging: boolean } = {
  host: process.env.MARIA_HOST || "localhost",
  port: Number(process.env.MARIA_PORT) || 3306,
  database: process.env.MARIA_DB || "SI",
  username: process.env.MARIA_USER || "root",
  password: process.env.MARIA_PASSWORD || "",
  logging: process.env.MARIA_LOG === "true",
};
