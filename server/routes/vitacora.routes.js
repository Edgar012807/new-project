// importacion de framework express
const express = require('express');

// importacion de los servvcios
const VitacoraService = require('../services/vitacora.service');
// importacion de las validaciones
const validatorHandler = require('../middlewares/validator.handler');
//importacion de los schemas definidos
const {
  createVitacoraSchema,
  updateVitacoraSchema,
  getVitacoraSchema,
} = require('../schemas/vitacora.schema');

// utilizar el metodo Router de Express
const router = express.Router();

// creacion de la Instancia de la clase UnidadService
const service = new VitacoraService();

// routas
router.get('/', async (req, res, next) => {
  try {
    const vitacora = await service.find(req.query);
    const conorden = await service.findOrden();
    //res.send('hello world');
    //res.json(vitacora);
    res.render('vitacora.ejs',{vitacora,conorden})
  } catch (error) {
    next(error);
  }
});
router.get(
  '/conceptos/:id',
  //validatorHandler(getVitacoraSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const vitaConcepto = await service.findConcepto(id);
      res.json(vitaConcepto)
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:vrtcCoorid',
  validatorHandler(getVitacoraSchema, 'params'),
  async (req, res, next) => {
    try {
      const { vrtcCoorid } = req.params;
      const unidade = await service.findOne(vrtcCoorid);
      res.json(unidade);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createVitacoraSchema, 'body'),
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
router.patch(
  '/:vrtcCoorid',
  validatorHandler(getVitacoraSchema, 'params'),
  validatorHandler(updateVitacoraSchema, 'body'),
  async (req, res, next) => {
    try {
      const { vrtcCoorid } = req.params;
      const body = req.body;
      const category = await service.update(vrtcCoorid, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);
router.delete('/:vrtcCoorid',
  validatorHandler(getVitacoraSchema, 'params'),
  async (req, res, next) => {
    try {
      const { vrtcCoorid } = req.params;
      await service.delete(vrtcCoorid);
      res.status(201).json({vrtcCoorid});
    } catch (error) {
      next(error);
    }
  }
);



// exportacion de el modulo
module.exports = router;
