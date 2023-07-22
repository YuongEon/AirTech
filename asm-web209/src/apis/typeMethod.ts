import { IType } from "../interfaces/type"
import instance from "./instance"

interface GetTypesRes {
  message: string,
  data: IType[]
}

export const getTypesProduct = async() => {
  const res = await instance.get<GetTypesRes>("/types")
  return res
}