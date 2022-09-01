import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import { createSessionHandler, getSessionsHandler, deleteSessionHandler } from './controller/session.controller';
import { createUserSchema } from './schema/user.schema';
import { createSessionSchema } from "./schema/session.schema";
import validateResource from "./middleware/validateResource";
import requireUser from "./middleware/requiredUser";



function routes(app: Express) {
  app.get("/heahtcheck", (req: Request, res: Response) => {
    res.status(200).json({msg: "Hello..."});
  });
  app.post('/api/users', validateResource(createUserSchema),createUserHandler)
  app.post('/api/sessions', validateResource(createSessionSchema),createSessionHandler)
  app.get('/api/sessions', requireUser, getSessionsHandler)
  app.delete('/api/sessions', requireUser, deleteSessionHandler)
}

export default routes;
