// importacion de framework express
const express = require('express');

// importacion de los servvcios
const ServicioService = require('../services/servicio.services');
// importacion de las validaciones
const validatorHandler = require('../middlewares/validator.handler');
//importacion de los schemas definidos
const {
  createServicioSchema,
  updateServicioSchema,
  getServicioSchema,
} = require('../schemas/servicio.schemas');

// utilizar el metodo Router de Express
const router = express.Router();

// creacion de la Instancia de la clase UnidadService
const service = new ServicioService();

// routas
router.get('/', async (req, res, next) => {
  try {
    const recursos = await service.find();
    res.json(recursos);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:recucodi',
  validatorHandler(getServicioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { recucodi } = req.params;
      const recurso = await service.findOne(recucodi);
      res.json(recurso);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
 validatorHandler(createServicioSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRecurso = await service.create(body);
      res.status(201).json(newRecurso);
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  '/:recucodi',
  validatorHandler(getServicioSchema, 'params'),
  validatorHandler(updateServicioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { recucodi } = req.params;
      const body = req.body;
      const recurso = await service.update(recucodi, body);
      res.json(recurso);
    } catch (error) {
      next(error);
    }
  }
);
router.delete('/:recucodi',
  validatorHandler(getServicioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { recucodi } = req.params;
      await service.delete(recucodi);
      res.status(201).json({recucodi});
    } catch (error) {
      next(error);
    }
  }
);



// exportacion de el modulo
module.exports = router;
