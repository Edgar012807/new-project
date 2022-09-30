const Joi = require('joi');

const torcCoorid = Joi.number().integer();
const tocrrain = Joi.number().integer();
const tocrrafi = Joi.number().integer();
const tocrvalo =Joi.number().integer();

const createTaorcoraSchema = Joi.object({
  torcCoorid: torcCoorid.required(),
  tocrrain: tocrrain.required(),
  tocrrafi: tocrrafi.required(),
  tocrvalo: tocrvalo.required(),

});

const updateTaorcaSchema = Joi.object({
  torcCoorid: torcCoorid,
  tocrrain: tocrrain,
  tocrrafi: tocrrafi,
  tocrvalo: tocrvalo,

});

const getTaorcaSchema = Joi.object({
  torcCoorid: torcCoorid
});

module.exports = {
  createTaorcoraSchema,
  updateTaorcaSchema,
  getTaorcaSchema,
};
