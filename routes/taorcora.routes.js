// importacion de framework express
const express = require('express');

// importacion de los servvcios
const TaorcoraService = require('../services/taorcora.services');
// importacion de las validaciones
const validatorHandler = require('../middlewares/validator.handler');
//importacion de los schemas definidos
const {
  createTaorcoraSchema,
  updateTaorcaSchema,
  getTaorcaSchema,
  querTaorcoraSchema
} = require('../schemas/taorcora.schema');

// utilizar el metodo Router de Express
const router = express.Router();

// creacion de la Instancia de la clase UnidadService
const service = new TaorcoraService();

// routas
router.get('/',
validatorHandler(querTaorcoraSchema, 'query'),
async (req, res, next) => {
  try {

    const taorcora = await service.find(req.query);
    const conorden = await service.findOrden();
    //res.send('hello world');
    //res.json(taorcora);
    res.render('taorcora.ejs',{taorcora,conorden})
  } catch (error) {
    next(error);
  }
});
router.get('/lista', async (req, res, next) => {
  try {

    const taorcora = await service.find(req.query);
    const conorden = await service.findOrden();
    //res.send('hello world');
    res.json(taorcora);
    //res.render('taorcora.ejs',{taorcora,conorden})
  } catch (error) {
    next(error);
  }
});
router.get('/datos', async (req, res, next) => {
  try {

    const taorcora = await service.find(req.query);
    const conorden = await service.findOrden();
    //res.send('hello world');
    res.json(taorcora);
    //res.render('taorcora.ejs',{taorcora,conorden})
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:torcCoorid',
  validatorHandler(getTaorcaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { torcCoorid } = req.params;
      const unidade = await service.findOne(torcCoorid);
      res.json(unidade);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  validatorHandler(createTaorcoraSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUnidades = await service.create(body);
      res.status(201).json(newUnidades);
    } catch (error) {
      next(error);
    }
  }
);
router.put(
  '/:torcCoorid',
  validatorHandler(getTaorcaSchema, 'params'),
  validatorHandler(updateTaorcaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { torcCoorid } = req.params;
      const body = req.body;
      const cliente = await service.update(torcCoorid, body);
      res.json(cliente);
    } catch (error) {
      next(error);
    }
  }
);
router.delete('/:torcCoorid',
  validatorHandler(getTaorcaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { torcCoorid } = req.params;
      await service.delete(torcCoorid);
      res.status(201).json({torcCoorid});
    } catch (error) {
      next(error);
    }
  }
);



// exportacion de el modulo
module.exports = router;
