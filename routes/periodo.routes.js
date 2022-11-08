// importacion de framework express
const express = require('express');

// importacion de los servvcios
const PeriodoService = require('../services/periodo.service');
// importacion de las validaciones
const validatorHandler = require('../middlewares/validator.handler');
//importacion de los schemas definidos
const {
  createPeriodoSchema,
  updatePeriodoSchema,
  getPeriodoSchema,
} = require('../schemas/periodo.schema');

// utilizar el metodo Router de Express
const router = express.Router();

// creacion de la Instancia de la clase UnidadService
const service = new PeriodoService();

// routas
router.get('/', async (req, res, next) => {
  try {
    const periodo = await service.find(req.query);
   //res.json(periodo);
    res.render('periodo.ejs',{periodo})
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:pericodi',
  validatorHandler(getPeriodoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { pericodi } = req.params;
      const recurso = await service.findOne(pericodi);
      res.json(recurso);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createPeriodoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPeriodo = await service.create(body);
      res.status(201).json(newPeriodo);
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  '/:recucodi',
  validatorHandler(getPeriodoSchema, 'params'),
  validatorHandler(updatePeriodoSchema, 'body'),
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
  validatorHandler(getPeriodoSchema, 'params'),
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
