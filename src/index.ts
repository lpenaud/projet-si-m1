import * as express from "express";
import router from "./routes";
import { hostname, port } from "./config";
import * as cors from "cors";
import { errorHandler } from "./routes/helpers";

const app = express();

app
  .use(cors({ allowedHeaders: "http://localhost:3000" }))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use("/api", errorHandler)
  .use("/api", router)
  .listen(port, hostname, () => {
    console.log(`Listening http://${hostname}:${port}`);
  });

