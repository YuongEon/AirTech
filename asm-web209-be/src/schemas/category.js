import Joi from 'joi';

const customMessageErrors = {
  'string.empty': "Trường này không được để trống"
}

const joiOptions = {
  messages: customMessageErrors
}

export const createCategorySchema = Joi.object({
  name: Joi.string().required(),
  products: Joi.array().default([])
}).options(joiOptions)
