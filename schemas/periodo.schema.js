const Joi = require('joi');

const pericodi = Joi.number().integer();
const periano = Joi.number();
const perimes = Joi.number().integer();
const periesta = Joi.string();
const peridesc = Joi.string();

const createPeriodoSchema = Joi.object({
  periano: periano.required(),
  perimes: perimes.required(),
  periesta: periesta,
  peridesc: peridesc.required(),
});

const updatePeriodoSchema = Joi.object({
  periano: periano,
  perimes: perimes,
  periesta: periesta,
  peridesc: peridesc,
});

const getPeriodoSchema = Joi.object({
  pericodi: pericodi.required(),
});

module.exports = {
  createPeriodoSchema,
  updatePeriodoSchema,
  getPeriodoSchema,
};
