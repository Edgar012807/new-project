const Joi = require('joi');

const ordeid = Joi.number().integer();
const ordenume = Joi.string();
const ordedesc = Joi.string();
const ordeobje = Joi.string();
const ordefere = Joi.date().less('now');
const clienteClieid = Joi.number().integer()
const ordefein = Joi.date()
const ordefefi = Joi.date()
const ordevato = Joi.number().integer()
const ordeveje = Joi.number().integer()
const ordeconta = Joi.string();//number().integer()
const ordeobev = Joi.string();//number().integer()





const createOrdenSchema = Joi.object({
  ordenume: ordenume.required(),
  ordedesc: ordedesc.required(),
  ordeobje: ordeobje.required(),
  ordefere: ordefere.required(),
  clienteClieid: clienteClieid.required(),
  ordefein: ordefein.required(),
  ordefefi: ordefefi.required(),
  ordevato: ordevato.required(),
  ordeveje: ordeveje,
  ordeconta: ordeconta.required(),
  ordeobev:  ordeobev.required()
});

const updateOrdenSchema = Joi.object({
  ordenume: ordenume,
  ordedesc: ordedesc,
  ordeobje: ordeobje,
  ordefere: ordefere,
  clienteClieid: clienteClieid,
  ordefein: ordefein,
  ordefefi: ordefefi,
  ordevato: ordevato,
  ordeveje: ordeveje,
  ordeconta: ordeconta,
  ordeobev:ordeobev
});

const getOrdenSchema = Joi.object({
  ordeid: ordeid.required(),
});



module.exports = {
  createOrdenSchema,
  updateOrdenSchema,
  getOrdenSchema,
};
