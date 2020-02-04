import * as express from "express";
import router from "./routes";
import { hostname, port } from "./config";
import bodyParser = require("body-parser");

const app = express();

app.use(bodyParser());
app.use('/api', router);

app.listen(port, hostname, () => {
    console.log(`Listening http://${hostname}:${port}`);
});

