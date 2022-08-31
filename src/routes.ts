import { createUserSchema } from './schema/user.schema';
import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validateResource from "./middleware/validateResource";

function routes(app: Express) {
  app.get("/heahtcheck", (req: Request, res: Response) => {
    res.status(200).json({msg: "Hello..."});
  });
  app.post('/api/users', validateResource(createUserSchema),createUserHandler)
}

export default routes;
