import Joi from "joi";

export const createColorSchema = Joi.object({
  name: Joi.string().required(),
  colorHash: Joi.string().required(),
});
