// importacion de framework express
const express = require('express');

// importacion de los servvcios
const OrdenService = require('../services/orden.services');
// importacion de las validaciones
const validatorHandler = require('../middlewares/validator.handler');
//importacion de los schemas definidos
const {
  createOrdenSchema,
  updateOrdenSchema,
  getOrdenSchema,
  getFecha
} = require('../schemas/orden.schema');
const { func } = require('joi');

// utilizar el metodo Router de Express
const router = express.Router();

// creacion de la Instancia de la clase UnidadService
const service = new OrdenService();

// routas
router.get('/', async (req, res, next) => {
  try {
    const orden = await service.find();
    //res.send('hello world');
    res.json(orden);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:ordeid',
  validatorHandler(getOrdenSchema, 'params'),
  async (req, res, next) => {
    try {
      const { ordeid } = req.params;
      const unidade = await service.findOne(ordeid);
      res.json(unidade);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createOrdenSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;const {ordefere , ordefein ,ordefefi} = req.body;
      if(Date.parse(ordefere)<Date.parse(ordefein)  || Date.parse(ordefefi)< Date.parse(ordefein)   ){
       const erra = await service.fecha(ordefere,ordefein ,ordefefi);
       res.json(erra);
      }

      const newUnidades = await service.create(body);
      res.status(201).json(newUnidades);
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  '/:ordeid',
  validatorHandler(getOrdenSchema, 'params'),
  validatorHandler(updateOrdenSchema, 'body'),
  async (req, res, next) => {
    try {
      const { ordeid } = req.params;
      const body = req.body;
      const cliente = await service.update(ordeid, body);
      res.json(cliente);
    } catch (error) {
      next(error);
    }
  }
);
router.delete('/:ordeid',
  validatorHandler(getOrdenSchema, 'params'),
  async (req, res, next) => {
    try {
      const { ordeid } = req.params;
      await service.delete(ordeid);
      res.status(201).json({ordeid});
    } catch (error) {
      next(error);
    }
  }
);



// exportacion de el modulo
module.exports = router;
