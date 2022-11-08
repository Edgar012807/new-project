// importacion de framework express
const express = require('express');

// importacion de los servvcios
const UnidadService = require('../services/unidad.services');
// importacion de las validaciones
const validatorHandler = require('../middlewares/validator.handler');
//importacion de los schemas definidos
const {
  createUnidadSchema,
  updateUnidadSchema,
  getUnidadSchema,
  queryUnidadSchema
} = require('../schemas/unidad.schema');
// utilizar el metodo Router de Express
const router = express.Router();

// creacion de la Instancia de la clase UnidadService
const service = new UnidadService();

// routas
router.get('/',
  validatorHandler(queryUnidadSchema, 'query'),
  async (req, res, next) => {
    try {
      const unidades = await service.find(req.query);
      //res.send('hello world');
      //res.json(unidades);
      res.render('unidad.ejs',{unidades})
    } catch (error) {
      next(error);
    }
  });
/* router.get('/create', async (req, res, next) => {
  try {
   // const unidades = await service.find();
    //res.send('hello world');
    //res.json(unidades);
    res.render('create.ejs')
  } catch (error) {
   next(error)
  }
}); */
router.get(
  '/:unidid',
  validatorHandler(getUnidadSchema, 'params'),
  async (req, res, next) => {
    try {
      const { unidid } = req.params;
      const unidade = await service.findOne(unidid);
      res.json(unidade);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  //validatorHandler(createUnidadSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      console.log(body);
      const newUnidades = await service.create(body);
      //res.redirect('/api/v1/unidad');
      res.status(201).json(newUnidades);
    } catch (error) {
      next(error);
     /* res.redirect('casa'); */
    }
  }
);
router.patch(
  '/:unidid',
  validatorHandler(getUnidadSchema, 'params'),
  validatorHandler(updateUnidadSchema, 'body'),
  async (req, res, next) => {
    try {
      const { unidid } = req.params;
      const body = req.body;
      const category = await service.update(unidid, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);
router.delete('/:unidid',
  validatorHandler(getUnidadSchema, 'params'),
  async (req, res, next) => {
    try {
      const { unidid } = req.params;
      await service.delete(unidid);
      res.status(201).json({unidid});
    } catch (error) {
      next(error);
    }
  }
);



// exportacion de el modulo
module.exports = router;
