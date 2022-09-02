import express, { Request, Response } from "express";
import config from "config";
import connect from "./utils/connect";
import log from "./utils/logger";
import routes from "./routes";
import deserializeUser from "./middleware/deserializeUser";


// import { nanoid } from 'nanoid';

// const id = nanoid(5);



const app = express();
const port = config.get<number>("port");

app.use(express.json());
app.use(deserializeUser)

app.post("/api/data", (req: Request, res: Response) => {
  console.log(id);
  res.sendStatus(200);
});

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello world...");
});

app.listen(port, async () => {
  await connect();
  log.info(`App running at http://localhost:${port}`)
  routes(app)
});
