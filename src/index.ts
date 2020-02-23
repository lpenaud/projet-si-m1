import * as express from "express";
import router from "./routes";
import { hostname, port, nodeEnv } from "./config";
import * as cors from "cors";
import { errorHandler } from "./routes/helpers";
import morgan = require("morgan");

const app = express();

app
  .use(cors({ allowedHeaders: "http://localhost:3000" }))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(morgan(nodeEnv === "local" ? "dev" : "common"))
  .use("/api", errorHandler)
  .use("/api", router)
  .listen(port, hostname, () => {
    console.log(`Listening http://${hostname}:${port}`);
  });

