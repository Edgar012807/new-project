const Joi = require('joi');

const coorid = Joi.number().integer();
const coordesc = Joi.string();
const ordenadoOrdeid = Joi.string();
const coorUnidid = Joi.string();


const limit = Joi.string().min(3).max(30000);
const offset = Joi.string().min(3).max(30000);
const orden = Joi.string()

const createConcordeSchema = Joi.object({
  coordesc: coordesc.required(),
  ordenadoOrdeid: ordenadoOrdeid.required(),
  coorUnidid: coorUnidid.required(),


});

const updateConcordeSchema = Joi.object({
  coordesc: coordesc,
  ordenadoOrdeid: ordenadoOrdeid,
  coorUnidid: coorUnidid
});

const getConcordeSchema = Joi.object({
  coorid: coorid.required(),
});

const queryConcordeSchema = Joi.object({
  limit,
  offset,
  orden,
  coordesc,
  ordenadoOrdeid,
  coorUnidid
});

module.exports = {
  createConcordeSchema,
  updateConcordeSchema,
  getConcordeSchema,
  queryConcordeSchema
};
