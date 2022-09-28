const Joi = require('joi');

const ordeid = Joi.number().integer();
const ordenume = Joi.string();
const ordedesc = Joi.string();
const ordeobje = Joi.string();
const ordefere = Joi.date().greater('now');
const clienteClienit = Joi.number().integer();
const ordefein = Joi.date().greater('now');
const ordefefi = Joi.date().greater('now');
const ordevato = Joi.number().integer();
const ordeveje = Joi.number().integer();





const createOrdenSchema = Joi.object({
  ordenume: ordenume.required(),
  ordedesc: ordedesc.required(),
  ordeobje: ordeobje.required(),
  ordefere: ordefere.required(),
  clienteClienit: clienteClienit.required(),
  ordefein: ordefein.required(),
  ordefefi: ordefefi.required(),
  ordevato: ordevato.required(),
  ordeveje: ordeveje,
});

const updateOrdenSchema = Joi.object({
  ordenume: ordenume,
  ordedesc: ordedesc,
  ordeobje: ordeobje,
  ordefere: ordefere,
  clienteClienit: clienteClienit,
  ordefein: ordefein,
  ordefefi: ordefefi,
  ordevato: ordevato,
  ordeveje: ordeveje
});

const getOrdenSchema = Joi.object({
  ordeid: ordeid.required(),
});



module.exports = {
  createOrdenSchema,
  updateOrdenSchema,
  getOrdenSchema,
};
