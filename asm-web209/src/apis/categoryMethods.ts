import { Category } from "../interfaces/category"
import instance from "./instance"

interface GetCategoriesRes {
  message: string,
  data: Category[]
}

export const fetchCategory = async () => {
  const res = await instance.get<GetCategoriesRes>("/categories")
  return res
}

export const createCategory = async (data: {name: string}) => {
  const res = await instance.post("/categories/create", data)
  return res
}

export const deleteCategory = async(_id:string) => {
  const res = await instance.delete("/categories/delete/"+_id)
  return res
}