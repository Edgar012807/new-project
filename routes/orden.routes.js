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

// utilizar el metodo Router de Express
const router = express.Router();

// creacion de la Instancia de la clase UnidadService
const service = new OrdenService();

// routas
router.get('/', async (req, res, next) => {
  try {
    const orden = await service.find();
    const cliente = await service.findCliente();
    //res.send('hello world');
    res.render('orden.ejs', {orden,cliente})
    // res.json(orden);
  } catch (error) {
    next(error);
  }
});
router.get('/create', async (req, res, next) => {
  try {
    const orden = await service.find();
    const cliente = await service.findCliente();
    //res.send('hello world');
    res.render('create_orden.ejs', {orden,cliente})
    //res.json(orden);
  } catch (error) {

    next(error);
  }
});

router.get(
  '/conceptos/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const vitaConcepto = await service.findClienteOrden(id);
      res.json(vitaConcepto)
    } catch (error) {
      next(error);
    }
  }
);
router.get(
  '/concept/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const vitaConcepto = await service.findClienteOrdena(id);
      res.json(vitaConcepto)
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:ordeid',
  validatorHandler(getOrdenSchema, 'params'),
  async (req, res, next) => {
    try {
      const { ordeid } = req.params;
      const unidade = await service.findOn(ordeid);
      res.json(unidade);
    } catch (error) {
      next(error);
    }
  }
);


router.get('/edit/:ordeid', async (req, res, next) => {
  try {
    const { ordeid } = req.params;
    //const body = req.body;
    const clie = await service.findOne(ordeid);
    //res.send('hello world');
    res.render('edit_orden.ejs', {clie})
    //res.json(orden);
  } catch (error) {

    next(error);
  }
});
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
      //res.redirect('/api/v1/orden');
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
      console.log('que paso');
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
