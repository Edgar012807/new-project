const express = require('express');

const unidadRouter = require('../routes/unidad.routes');
const clienteRouter = require('../routes/cliente.routes');
const RecursoRouter = require('../routes/recurso.routes');
const OrdenRouter = require('../routes/orden.routes');
const ConcordeRouter = require('../routes/concorde.routes');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/unidad',unidadRouter);
  router.use('/cliente',clienteRouter);
  router.use('/recurso',RecursoRouter);
  router.use('/orden',OrdenRouter);
  router.use('/concorde',ConcordeRouter);

}

module.exports = routerApi;
