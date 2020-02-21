import { config } from "dotenv";

config();

// Server config
export const port = Number(process.env.PORT) || 8080;
export const hostname = process.env.HOSTNAME || "0.0.0.0";

// Mongo config
export const mongoConfig = {
    hostname: process.env.MONGO_HOSTNAME || "localhost",
    port: process.env.MONGO_PORT || 27017,
    database: process.env.MONGO_DB || "SI",
};

// MariaDB config
export const mariaConfig = {
    database: process.env.MARIA_BD || "SI",
    username: process.env.MARIA_USER || "root",
    password: process.env.MARIA_PASSWORD || "",
    host: process.env.MARIA_HOST || "localhost",
    port: Number(process.env.MARIA_PORT) || 3306,
};
