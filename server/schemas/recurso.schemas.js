const Joi = require('joi');

const recucodi = Joi.number().integer();
const recunomb = Joi.string().min(4).max(30);
const recusuho = Joi.number().integer().min(3).max(15);
const recuvanu = Joi.number().integer().min(3).max(15);
const recutoco = Joi.number().integer().min(3).max(15);

const createRecursoSchema = Joi.object({
  recunomb: recunomb.required(),
  recusuho: recusuho.required(),
  recuvanu: recuvanu.required(),
  recutoco: recutoco.required(),
});

const updateRecursoSchema = Joi.object({
  recunomb: recunomb,
  recusuho: recusuho,
  recuvanu: recuvanu,
  recutoco: recutoco,
});

const getRecursoSchema = Joi.object({
  recucodi: recucodi.required(),
});

module.exports = {
  createRecursoSchema,
  updateRecursoSchema,
  getRecursoSchema,
};
