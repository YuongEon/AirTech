import Joi from "joi";

export const createClassifyTypeSchema = Joi.object({
  name: Joi.string().required(),
});
