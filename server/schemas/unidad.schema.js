const Joi = require('joi');

const unidid = Joi.number().integer();
const uniddesc = Joi.string().min(4).max(30);
const uniddeco = Joi.string().min(3).max(6);

const createUnidadSchema = Joi.object({
  uniddesc: uniddesc.required(),
  uniddeco: uniddeco.required(),
});

const updateUnidadSchema = Joi.object({
  uniddesc: uniddesc,
  uniddeco: uniddeco,
});

const getUnidadSchema = Joi.object({
  unidid: unidid.required(),
});

module.exports = {
  createUnidadSchema,
  updateUnidadSchema,
  getUnidadSchema,
};
