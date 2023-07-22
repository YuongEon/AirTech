export interface IProduct {
  _id: string,
  name: string,
  ratting: number,
  price: number,
  imgArray: string[],
  quantity: number,
  sale: number,
  desc: string,
  categoryId: string,
  brandId: string,
  typeId: string,
}

export interface MessageResponse {
  message: string
}

export interface GetProductResponse extends MessageResponse {
  data: {
    docs: IProduct[]
  }
}

export interface GetOneProductResponse {
  data: IProduct,
  message: string
}