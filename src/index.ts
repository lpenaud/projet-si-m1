import * as express from "express";
import router from "./routes";
import { hostname, port } from "./config";
import * as cors from "cors";
import bodyParser = require("body-parser");

const app = express();

app.use(cors({ allowedHeaders: "http://localhost:3000" }))
app.use(bodyParser());
app.use('/api', router);

app.listen(port, hostname, () => {
    console.log(`Listening http://${hostname}:${port}`);
});

