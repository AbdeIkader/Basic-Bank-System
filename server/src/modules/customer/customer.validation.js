import Joi from "joi";

const customerValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  currentBalance: Joi.number().required(),
});

export { customerValidation };
