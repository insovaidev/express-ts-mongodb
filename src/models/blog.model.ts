import mongoose from "mongoose";
import { UserDocument } from "./user.model";

export interface BlogDocument extends mongoose.Document {
  user: UserDocument["_id"];
  title: string;
  location: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const BlogModel = mongoose.model<BlogDocument>("Blog", blogSchema);
export default BlogModel;
