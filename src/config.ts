import { config } from "dotenv";

config();

export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
}

export interface MariaConfig extends DatabaseConfig {
  sync: string;
}

// Server config
export const port = Number(process.env.PORT) || 8080;
export const hostname = process.env.HOSTNAME || "0.0.0.0";
export const debug = Boolean(process.env.DEBUG) || true;

// Mongo config
export const mongoConfig: DatabaseConfig = {
  host: process.env.MONGO_HOSTNAME || "localhost",
  port: Number(process.env.MONGO_PORT) || 27017,
  database: process.env.MONGO_DB || "SI",
  username: process.env.MONGO_USER || "",
  password: process.env.MONGO_PASSWORD || "",
};

// MariaDB config
export const mariaConfig: MariaConfig = {
  database: process.env.MARIA_BD || "SI",
  username: process.env.MARIA_USER || "root",
  password: process.env.MARIA_PASSWORD || "",
  host: process.env.MARIA_HOST || "localhost",
  port: Number(process.env.MARIA_PORT) || 3306,
  sync: process.env.MARIA_SYNC || "",
};
