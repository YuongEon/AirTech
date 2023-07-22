import Joi from 'joi'

const createVersionSchema = Joi.object({
  colorId: Joi.string().required(),
  classifyTypeId: Joi.string().required(),
  quantity: Joi.number().required().min(1).message({
    'number.min': "Số lượng không được nhỏ hơn 1"
  }),
})