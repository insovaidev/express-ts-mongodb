import { Request, Response } from "express";
import {
  CreateProductInput,
  UpdateProductInput,
  ReadProductInput,
  DeleteProductInput,
} from "./../schema/product.schema";
import { createProduct } from "../service/product.service";

export async function createProductHandler(
  req: Request<{}, {}, CreateProductInput["body"]>,
  res: Response
) {
  // const userId = res.locals.user._id;
  const body = req.body;
  console.log(body);
  // const product = await createProduct({...body, user: userId});
  // return res.send(product);
}

export async function updateProductHandler(req: Request, res: Response) {}
export async function getProductHandler(req: Request, res: Response) {}
export async function deleteProductHandler(req: Request, res: Response) {}
