import { createProductSchema, updateProductSchema, getProductSchema, deleteProductSchema } from './schema/product.schema';
import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import { createProductHandler, updateProductHandler, getProductHandler, deleteProductHandler } from './controller/product.controller'
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
  app.post('/api/products', [requireUser, validateResource(createProductSchema)], createProductHandler)
  app.put('/api/products', [requireUser, validateResource(updateProductSchema)], updateProductHandler)
  app.get('/api/products', validateResource(getProductSchema), getProductHandler)
  app.delete('/api/products', [ requireUser ,validateResource(deleteProductSchema)], deleteProductHandler)
}

export default routes;
