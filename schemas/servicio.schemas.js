
const Joi = require('joi');

const clienClieid = Joi.number().integer();
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
const periPericodi = Joi.number().integer();

const createServicioSchema = Joi.object({
  clienClieid : clienClieid.required(),
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
  periPericodi : periPericodi,
});

const updateServicioSchema = Joi.object({
  clienClieid : clienClieid ,
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
  periPericodi:periPericodi,
});

const getServicioSchema = Joi.object({
  clienClieid: clienClieid.required(),
});

module.exports = {
  createServicioSchema,
  updateServicioSchema,
  getServicioSchema,
};
