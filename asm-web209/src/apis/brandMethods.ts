import { Brand } from "../interfaces/brand"
import instance from "./instance"

interface BrandResponse {
  message: string,
  data: Brand[]
}

export const fetchBrand = async() => {
  const res = await instance.get<BrandResponse>("/brands")
  return res
}