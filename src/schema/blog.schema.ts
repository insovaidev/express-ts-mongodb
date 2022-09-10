import { string, object, TypeOf } from "zod"


const payload = {
    body: object({
        title: string({ required_error: "Title is required"}),
        location: string({ required_error: "Location is required" }),
        image: string({ required_error: "Image is required" })
    })
}
const params = {
    params: object({
        blogId: string({ required_error: "Title is required"}),
    })
}

export const createBlogSchema = object({
    ...payload
})

export const updateBlogSchema = object({
    ...payload,
    ...params
})

export type CreateBlogInput = TypeOf<typeof createBlogSchema>;
export type UpdateBlogInput = TypeOf<typeof updateBlogSchema>;