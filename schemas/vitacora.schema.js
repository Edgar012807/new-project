const Joi = require('joi');

const vrtcCoorid = Joi.number().integer();
const vtcrain = Joi.date();
const vtcrrafi = Joi.date();
const vtcrvalo = Joi.number().integer();
const vtcrTocrid = Joi.number().integer();

const createVitacoraSchema = Joi.object({
  vrtcCoorid: vrtcCoorid.required(),
  vtcrain: vtcrain.required(),
  vtcrrafi: vtcrrafi.required(),
  vtcrvalo: vtcrvalo.required(),
  vtcrTocrid: vtcrTocrid.required()

});

const updateVitacoraSchema = Joi.object({
  vrtcCoorid: vrtcCoorid,
  vtcrain: vtcrain,
  vtcrrafi: vtcrrafi,
  vtcrvalo: vtcrvalo,
  vtcrTocrid: vtcrTocrid,
});

const getVitacoraSchema = Joi.object({
  vrtcCoorid: vrtcCoorid,
});

module.exports = {
  createVitacoraSchema,
  updateVitacoraSchema,
  getVitacoraSchema,
};
