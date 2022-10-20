// importacion de framework express
const express = require('express');

// importacion de los servvcios
const ConcordeService = require('../services/concorde.services');
// importacion de las validaciones
const validatorHandler = require('../middlewares/validator.handler');
//importacion de los schemas definidos
const {
  createConcordeSchema,
  updateConcordeSchema,
  getConcordeSchema,
  queryConcordeSchema
} = require('../schemas/concorde.schemas');

// utilizar el metodo Router de Express
const router = express.Router();

// creacion de la Instancia de la clase UnidadService
const service = new ConcordeService();

// routas
router.get('/',
validatorHandler(queryConcordeSchema, 'query'),
async (req, res, next) => {
  try {
    console.log('errerrer')
    const concorde = await service.find(req.query);
    const conorden = await service.findOrden();
    const conunidad = await service.findUnidad();
    //res.send('hello world');
    // res.json(concorde);
    res.render('concorde.ejs',{concorde,conorden,conunidad})
  } catch (error) {
    //next(error);
  }
});

router.get(
  '/:coorid',
  validatorHandler(getConcordeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { coorid } = req.params;
      const unidade = await service.findOne(coorid);
      res.json(unidade);
    } catch (error) {
      next(error);
    }
  }
);


router.post(
  '/',
  validatorHandler(createConcordeSchema, 'body'),
  async (req, res, next) => {
    try {
      console.log('eeeeoh')
      const body = req.body;
      const newUnidades = await service.create(body);
      res.status(201).json(newUnidades);
      //console.log('pello');
      //res.redirect('/api/v1/cliente')
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  '/:coorid',
  validatorHandler(getConcordeSchema, 'params'),
  validatorHandler(updateConcordeSchema, 'body'),
  async (req, res, next) => {
    try {
      console.log('cantaera')
      const { coorid } = req.params;
      const body = req.body;
      const concepto = await service.update(coorid, body);
      res.json(concepto);
    } catch (error) {
      next(error);
    }
  }
);
router.delete('/:coorid',
  validatorHandler(getConcordeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { coorid } = req.params;
      await service.delete(coorid);
      res.status(201).json({coorid});
    } catch (error) {
      next(error);
    }
  }
);



// exportacion de el modulo
module.exports = router;
