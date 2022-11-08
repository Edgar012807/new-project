
const Joi = require('joi');

const clienClienit = Joi.number().integer();
const ordenOrdeid = Joi.number().integer();
const conCoorid = Joi.number().integer();
const uniUnidid = Joi.number().integer();
const servfech = Joi.date()
const recuRecucodi = Joi.number().integer();
const servcant = Joi.number().integer();
const servvalo = Joi.number().integer();
const servmoda = Joi.string();
const servcost = Joi.number().integer();
const servesta = Joi.string();
const servano = Joi.number().integer();
const servmes = Joi.number().integer();

const createServicioSchema = Joi.object({
  clienClienit : clienClienit.required(),
  ordenOrdeid : ordenOrdeid.required(),
  conCoorid : conCoorid.required(),
  uniUnidid : uniUnidid.required(),
  servfech : servfech.required(),
  recuRecucodi : recuRecucodi.required(),
  servcant : servcant.required(),
  servano:servano,
  servmes:servmes,
  servvalo : servvalo,
  servmoda : servmoda,
  servcost : servcost,
  servesta : servesta,
});

const updateServicioSchema = Joi.object({
  clienClienit : clienClienit ,
  ordenOrdeid : ordenOrdeid,
  conCoorid : conCoorid,
  uniUnidid : uniUnidid,
  servfech : servfech,
  recuRecucodi : recuRecucodi,
  servcant : servcant,
  servvalo : servvalo ,
  servmoda : servmoda ,
  servcost : servcost,
  servesta : servesta,
  servano:servano,
  servmes:servmes,
});

const getServicioSchema = Joi.object({
  clienClienit: clienClienit.required(),
});

module.exports = {
  createServicioSchema,
  updateServicioSchema,
  getServicioSchema,
};
