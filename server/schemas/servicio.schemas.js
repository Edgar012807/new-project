
const Joi = require('joi');

const servclie = Joi.number().integer();
const servorde = Joi.number().integer();
const servconc = Joi.number().integer();
const servunid = Joi.number().integer();
const servfech = Joi.date()
const servrecu = Joi.number().integer();
const servcant = Joi.number().integer();
const servvalo = Joi.number().integer();
const servmoda = Joi.string();
const servcost = Joi.number().integer();
const servesta = Joi.string();

const createServicioSchema = Joi.object({
  servclie : Joi.required(),
  servorde : Joi.required(),
  servconc : Joi.required(),
  servunid : Joi.required(),
  servfech : Joi.required(),
  servrecu : Joi.required(),
  servcant : Joi.required(),
  servvalo : Joi.required(),
  servmoda : Joi.required(),
  servcost : Joi.required(),
  servesta : Joi.required(),
});

const updateServicioSchema = Joi.object({
  servclie : servclie ,
  servorde : servorde,
  servconc : servconc,
  servunid : servunid,
  servfech : servfech,
  servrecu : servrecu,
  servcant : servcant,
  servvalo : servvalo ,
  servmoda : servmoda ,
  servcost : servcost,
  servesta : servesta,
});

const getServicioSchema = Joi.object({
  servclie: servclie.required(),
});

module.exports = {
  createServicioSchema,
  updateServicioSchema,
  getServicioSchema,
};
