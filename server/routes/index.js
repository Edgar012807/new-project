const express = require('express');

const unidadRouter = require('../routes/unidad.routes');
const clientedRouter = require('../routes/cliente.routes');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v0001', router);
  router.use('/unidad',unidadRouter);
  router.use('/cliente',clientedRouter);

}

module.exports = routerApi;
