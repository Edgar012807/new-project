// importacion de framework express
const express = require('express');

// importacion de los servvcios
const RolService = require('../services/roles.service');
// importacion de las validaciones
const validatorHandler = require('../middlewares/validator.handler');
//importacion de los schemas definidos
const {
  createClienteSchema,
  updateClienteSchema,
  getClienteSchema,
} = require('../schemas/cliente.schema');

// utilizar el metodo Router de Express
const router = express.Router();

// creacion de la Instancia de la clase UnidadService
const service = new RolService();

// routas
router.get('/', async (req, res, next) => {
  try {
    const rol = await service.find();
    //res.send('hello world');
    res.json(rol);
    //res.render('cliente.ejs',{clientes});
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:clieid',
  //validatorHandler(getClienteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { clieid } = req.params;
      const unidade = await service.findOne(clieid);
      res.json(unidade);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/',
  //validatorHandler(createClienteSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRol = await service.create(body);
      res.status(201).json(newRol);
      //res.redirect('/api/v1/cliente')
    } catch (error) {
      next(error);
    }
  }
);
router.put(
  '/:clieid',
  validatorHandler(getClienteSchema, 'params'),
  validatorHandler(updateClienteSchema, 'body'),
  async (req, res, next) => {
    try {
      const { clieid } = req.params;
      const body = req.body;
      const cliente = await service.update(clieid, body);
      res.json(cliente);
    } catch (error) {
      next(error);
    }
  }
);
router.delete('/:clienit',
  validatorHandler(getClienteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { clienit } = req.params;
      await service.delete(clienit);
      res.status(201).json({clienit});
    } catch (error) {
      next(error);
    }
  }
);



// exportacion de el modulo
module.exports = router;
