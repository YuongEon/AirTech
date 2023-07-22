import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'

const emptyError = "This field is required"

export const productSchema = z.object({
  name: z.string().min(1, {message: emptyError}),
  price: z.number().min(1000, {message: "Price can not less than 1000"}),
  desc: z.string().min(1, {message: emptyError}).max(255, {message: "Total Char can not more than 255"}),
  // imgArray: z.array(z.string()).nonempty({message: emptyError}),
  quantity: z.number().min(1, {message: "Quantity can not less than 1"}),
  categoryId: z.string().min(1, {message: emptyError}),
  brandId: z.string().min(1, {message: emptyError}),
  typeId: z.string().min(1, {message: emptyError})
})