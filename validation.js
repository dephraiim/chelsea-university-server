// Validation
const Joi = require('joi');

const registerValidation = (requestBody) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(6),
  });

  return schema.validate(requestBody);
};

const loginValidation = (requestBody) => {
  const schema = Joi.object({
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(6),
  });

  return schema.validate(requestBody);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
