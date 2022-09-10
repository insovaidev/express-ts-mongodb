import express, { Request, Response } from "express";
import config from "config";
import connect from "./utils/connect";
import log from "./utils/logger";
import routes from "./routes";
import deserializeUser from "./middleware/deserializeUser";


const app = express();
const port = config.get<number>("port");

app.use(express.json());
app.use(deserializeUser);

app.post("/api/data", (req: Request, res: Response) => {

});
app.get("/", (req: Request, res: Response) => {
  return res.send("Hello world...");
});

app.listen(port, async () => {
  await connect();
  log.info(`App running at http://localhost:${port}`);
  routes(app);
});
