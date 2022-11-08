const Joi = require('joi');

const clienit = Joi.number().integer().min(1).max(20000000009);
const clienomb = Joi.string().min(4).max(100);
const clieesta = Joi.string().min(1).max(1);

const createClienteSchema = Joi.object({
  clienomb: clienomb.required()

});

const updateClienteSchema = Joi.object({
  clienomb: clienomb,
  clieesta: clieesta,
});

const getClienteSchema = Joi.object({
  clienit: clienit.required(),
});

module.exports = {
  createClienteSchema,
  updateClienteSchema,
  getClienteSchema,
};
