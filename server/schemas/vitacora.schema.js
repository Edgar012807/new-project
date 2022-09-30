const Joi = require('joi');

const vrtcCoorid = Joi.number().integer();
const vtcrain = Joi.date();
const vtcrrafi = Joi.date();
const vtcrvalo = Joi.number().integer();

const createVitacoraSchema = Joi.object({
  vrtcCoorid: vrtcCoorid.required(),
  vtcrain: vtcrain.required(),
  vtcrrafi: vtcrrafi.required(),
  vtcrvalo: vtcrvalo.required()

});

const updateVitacoraSchema = Joi.object({
  vrtcCoorid: vrtcCoorid,
  vtcrain: vtcrain,
  vtcrrafi: vtcrrafi,
  vtcrvalo: vtcrvalo
});

const getVitacoraSchema = Joi.object({
  vrtcCoorid: vrtcCoorid.required(),
});

module.exports = {
  createVitacoraSchema,
  updateVitacoraSchema,
  getVitacoraSchema,
};
