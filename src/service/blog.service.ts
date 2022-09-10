import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import BlogModel, { BlogDocument } from "../models/blog.model";

export async function createBlog(
  input: DocumentDefinition<Omit<BlogDocument, "createdAt" | "updatedAt">>
) {
  return BlogModel.create(input);
}

export async function getBlog(
  query: FilterQuery<BlogDocument>,
) {
  return BlogModel.find(query).lean();
}

export async function findAndUpdateBlog(
  query: FilterQuery<BlogDocument>,
  update: UpdateQuery<BlogDocument>,
  options: QueryOptions
) {
  return BlogModel.findOneAndUpdate(query, update, options);
}
