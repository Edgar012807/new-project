const Joi = require('joi');

const clieid = Joi.number().integer().min(1).max(20000000009);
const clienit = Joi.number().integer().min(1).max(20000000009);
const clienomb = Joi.string().min(4).max(100);
const clieesta = Joi.string().min(1).max(1);

const createClienteSchema = Joi.object({
  clienomb: clienomb.required(),
  clienit: clienit.required()

});

const updateClienteSchema = Joi.object({
  clienomb: clienomb,
  clienit: clienit,
  clieesta: clieesta,
});

const getClienteSchema = Joi.object({
  clieid: clieid.required(),
});

module.exports = {
  createClienteSchema,
  updateClienteSchema,
  getClienteSchema,
};
