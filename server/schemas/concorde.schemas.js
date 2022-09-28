const Joi = require('joi');

const coorid = Joi.number().integer();
const coordesc = Joi.string();
const ordenadoOrdeid = Joi.number().integer();
const coorunid = Joi.number().integer();

const createConcordeSchema = Joi.object({
  coordesc: coordesc.required(),
  ordenadoOrdeid: ordenadoOrdeid.required(),
  coorunid: coorunid.required(),


});

const updateConcordeSchema = Joi.object({
  coordesc: coordesc,
  ordenadoOrdeid: ordenadoOrdeid,
  coorunid: coorunid
});

const getConcordeSchema = Joi.object({
  coorid: coorid.required(),
});

module.exports = {
  createConcordeSchema,
  updateConcordeSchema,
  getConcordeSchema,
};
