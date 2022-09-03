import mongoose from "mongoose";
import { UserDocument } from "./user.model";

import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdef', 10)

function fun(){
  return `"${nanoid(10)}"`
}

export interface ProductDocument extends mongoose.Document {
  productId: string;
  user: UserDocument["_id"];
  title: string;
  description: string;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
      default: fun()
      
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model<ProductDocument>("Product", productSchema);

export default ProductModel;
