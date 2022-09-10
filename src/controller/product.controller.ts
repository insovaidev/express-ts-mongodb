import { Request, Response } from "express";
import {
  CreateProductInput,
  UpdateProductInput,
  ReadProductInput,
  DeleteProductInput,
} from "./../schema/product.schema";
import {
  createProduct,
  findProduct,
  findAndUpdateProduct,
} from "../service/product.service";

export async function createProductHandler(
  req: Request<{}, {}, CreateProductInput["body"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const body = req.body;
  const product = await createProduct({ ...body, user: userId });
  return res.send(product);
}
export async function getProductHandler(req: Request, res: Response) {
  const _productId = req.params.productId
  const product = await findProduct({ _id: _productId })
  if(!product){
    res.status(403).send({ msg: "User not found"})
  }
  return res.status(200).send(product)
}
export async function updateProductHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  const _productId = req.params.productId;
  const update = req.body;
  const product = await findProduct({ _id: _productId });

  if (!product) {
    return res.sendStatus(404);
  }

  if (String(product.user) !== userId) {
    return res.sendStatus(403);
  }
  const updatedProduct = await findAndUpdateProduct({ _id: _productId },{...update}, {new: true});
  return res.send(updatedProduct);
}

export async function deleteProductHandler(req: Request, res: Response) {}
