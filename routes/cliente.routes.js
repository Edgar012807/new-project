// importacion de framework express
const express = require('express');
const passport = require('passport');
// importacion de los servvcios
const ClienteService = require('../services/cliente.services');

// importacion de las validaciones
const validatorHandler = require('../middlewares/validator.handler');
const {checkRoles} = require('../middlewares/auth.handler');
//importacion de los schemas definidos
const {
  createClienteSchema,
  updateClienteSchema,
  getClienteSchema,
} = require('../schemas/cliente.schema');

// utilizar el metodo Router de Express
const router = express.Router();

// creacion de la Instancia de la clase UnidadService
const service = new ClienteService();
const rolex = [];

async function casa (){
  const roles = await service1.find();
  roles.forEach((iten=>{
   // console.log(iten.rorol)
    rolex.push ( iten.rorol);
  }))
  //console.log( '.rolexcasa');
  //console.log( rolex);
  return rolex;
}

 //const fer = casa();
//console.log(fer)
console.log("cancion")

router.get('/',
passport.authenticate('jwt',{session:false}),
checkRoles(2),
async (req, res, next) => {

  try {
    const clientes = await service.find();
    //res.send('hello world');
    res.status(200).json(clientes);
    //res.render('cliente.ejs',{clientes});
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:clieid',
  passport.authenticate('jwt',{session:false}),
  checkRoles(5),
  validatorHandler(getClienteSchema, 'params'),
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
  passport.authenticate('jwt',{session:false}),
  checkRoles(1),
  validatorHandler(createClienteSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUnidades = await service.create(body);

      res.status(201).json(newUnidades);
      //res.redirect('/api/v1/cliente')
    } catch (error) {
      next(error);
    }
  }
);
router.put(
  '/:clieid',
  passport.authenticate('jwt',{session:false}),
  checkRoles(3),
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
passport.authenticate('jwt',{session:false}),
checkRoles(4),
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
