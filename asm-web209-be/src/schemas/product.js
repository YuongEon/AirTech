import Joi from 'joi';

const customMessages = {
  'any.required': "Trường này là bắt buộc",
  'string.empty': "Trường này không được để trống",
  'string.min' : "Không được ít quá 10 ký tự",
  'string.max' : "Không được vượt quá 255 ký tự",
  'number.base': "Dữ liệu phải đúng định dạng số"
}

const joiOptions = {
  messages: customMessages
}

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  ratting: Joi.number().default(0),
  price: Joi.number().required().min(1000).message({
    'number.min' : "Giá không được nhỏ hơn 1000"
  }),
  imgArray: Joi.array().required(),
  quantity: Joi.number().required().min(1).message({
    'number.min': "Số lượng không được nhỏ hơn 1"
  }),
  sale: Joi.number().default(0).max(100).message({
    'number.max': "Giảm giá không được vượt quá 100"
  }),
  desc: Joi.string().required().min(10).max(255),
  categoryId: Joi.string().required(),
  brandId: Joi.string().required(),
  typeId: Joi.string().required()
}).options({ ...joiOptions, abortEarly: false });

