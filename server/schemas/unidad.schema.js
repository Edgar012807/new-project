const Joi = require('joi');

const unidid = Joi.number().integer();
const uniddesc = Joi.string().min(4).max(30000);
const uniddeco = Joi.string().min(3).max(30000);


const limit = Joi.string();
const offset = Joi.string();


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

const queryUnidadSchema = Joi.object({
  limit,
  offset,
  uniddesc,
  uniddeco
});

module.exports = {
  createUnidadSchema,
  updateUnidadSchema,
  getUnidadSchema,
  queryUnidadSchema
};
