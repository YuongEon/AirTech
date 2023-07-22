import {
  GetOneProductResponse,
  GetProductResponse,
  IProduct,
} from "../interfaces/product";
import instance from "./instance";

export const getProducts = async (
  page: string,
  limit: string,
  sortBy: string,
  sortOrder: string
) => {
  const res = await instance.get<GetProductResponse>(
    `/products?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`
  );
  return res;
};

// export const getProductsByCategory = async (
//   page: string,
//   limit: string,
//   sortBy: string,
//   sortOrder: string,
//   categoryId: string
// ) => {
//   const res = await instance.get<GetProductResponse>(
//     `/products?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&categoryId=${categoryId}`
//   );
//   return res;
// };

export const getProductFilterBy = (filterBy: string, valueFilterBy: string) => {
  return async (
    page: string,
    limit: string,
    sortBy: string,
    sortOrder: string
  ) => {
    const res = await instance.get<GetProductResponse>(
      `/products?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&${filterBy}=${valueFilterBy}`
    );
    return res;
  };
};

export const getProduct = async (_id: string) => {
  const res = await instance.get<GetOneProductResponse>("/products/" + _id);
  return res;
};

export const createProduct = async (data: IProduct) => {
  const res = await instance.post("/products/create", data);
  return res;
};

export const deleteProduct = async (_id: string) => {
  const res = await instance.delete("/products/delete/"+_id);
  return res
}
