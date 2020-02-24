import * as express from "express";
import router from "./routes";
import { hostname, port, nodeEnv, environments } from "./config";
import * as cors from "cors";
import morgan = require("morgan");
import { errorHandler } from "./helpers/middleware";

const app = express();

app
  .use(cors({ allowedHeaders: "http://localhost:3000" }))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(morgan(nodeEnv === environments.local ? "dev" : "common"))
  .use("/api", router)
  .use(errorHandler)
  .listen(port, hostname, () => {
    console.log(`Listening http://${hostname}:${port}`);
  })
;

