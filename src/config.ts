import { config } from "dotenv";

config();

export const port = Number(process.env.PORT) || 8080;
export const hostname = process.env.HOSTNAME || "0.0.0.0";

export const mongoHostname = process.env.MONGO_HOSTNAME || "localhost";
export const mongoPort = process.env.MONGO_PORT || 27017;
export const mongoDb = process.env.MONGO_DB || "BookStore";
