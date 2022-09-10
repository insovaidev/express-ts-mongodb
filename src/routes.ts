import { createProductSchema, updateProductSchema, getProductSchema, deleteProductSchema } from './schema/product.schema';
import { Express} from "express";
import { createUserHandler } from "./controller/user.controller";
import { createProductHandler, updateProductHandler, getProductHandler, deleteProductHandler } from './controller/product.controller'
import { createSessionHandler, getSessionsHandler, deleteSessionHandler } from './controller/session.controller';
import { createBlogHandler, getBlogHandler, updateBlogHandler } from "./controller/blog.controller"
import { createUserSchema } from './schema/user.schema';
import { createSessionSchema } from "./schema/session.schema";
import { createBlogSchema, updateBlogSchema } from './schema/blog.schema';
import validateResource from "./middleware/validateResource";
import requireUser from "./middleware/requiredUser";

function routes(app: Express) {
  
  app.post('/api/users', validateResource(createUserSchema), createUserHandler)
  app.post('/api/sessions', validateResource(createSessionSchema), createSessionHandler)
  app.get('/api/sessions', requireUser, getSessionsHandler)
  app.delete('/api/sessions', requireUser, deleteSessionHandler)
  app.post('/api/products', [requireUser, validateResource(createProductSchema)], createProductHandler)
  app.patch('/api/products/:productId', [requireUser, validateResource(updateProductSchema)], updateProductHandler)
  app.get('/api/products/:productId',  validateResource(getProductSchema),  getProductHandler, )
  app.delete('/api/products', [ requireUser ,validateResource(deleteProductSchema)], deleteProductHandler)
  app.post("/api/blogs", requireUser, validateResource(createBlogSchema), createBlogHandler)
  app.get("/api/blogs", requireUser , getBlogHandler )
  app.patch("/api/blogs/:blogId", [requireUser, validateResource(updateBlogSchema)]  , updateBlogHandler  )
}
export default routes;
