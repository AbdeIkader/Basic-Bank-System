import Joi from "joi";

const transferValidation = Joi.object({
  sender: Joi.string().email().required(),
  receiver: Joi.string().email().required(),
  amount: Joi.number().positive().required(),
});

export { transferValidation };
