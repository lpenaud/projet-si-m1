import * as express from "express";
import router from "./routes";

const port = Number(process.env.PORT) || 8080;
const hostname = process.env.hostname || "localhost"
const app = express();

app.use('/api', router);

app.listen(port, hostname, () => {
    console.log(`Listening http://${hostname}:${port}`);
});

