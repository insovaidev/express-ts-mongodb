import { Request, Response } from "express";
import { createBlog, getBlog, findAndUpdateBlog } from "../service/blog.service";
import { CreateBlogInput } from "../schema/blog.schema";

export async function createBlogHandler(
  req: Request<{}, {}, CreateBlogInput["body"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const body = req.body;
  console.log({ ...body, user: userId });
  const blog = await createBlog({ ...body, user: userId });
  return res.send(blog);
}

export async function getBlogHandler(req: Request, res: Response){
  const userId = res.locals.user._id;
    const blog =  await getBlog({ user : userId })
    if(! blog){
      return res.status(403).send({ msg: "Blog not not found!"})
    } 
    return res.status(200).send(blog)
}

export async function updateBlogHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  const blogId = req.params.blogId;
  const body =  req.body;
  const blog = await getBlog({ _id: blogId })
  if(!blog){
    return res.status(403).send({ msg: "blog not foung"})
  }

  const updateBlog = await findAndUpdateBlog({ _id: blogId }, { ...body }, { new: true })
  return res.send(updateBlog)
}
