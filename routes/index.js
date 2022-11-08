const express = require('express');

const unidadRouter = require('../routes/unidad.routes');
const clienteRouter = require('../routes/cliente.routes');
const RecursoRouter = require('../routes/recurso.routes');
const OrdenRouter = require('../routes/orden.routes');
const ConcordeRouter = require('../routes/concorde.routes');
const TaorcoraRouter = require('../routes/taorcora.routes');
const VitacoraRouter = require('../routes/vitacora.routes');
const ServicioRouter = require('../routes/servicio.routes');
const PeriodoRouter = require('../routes/periodo.routes');
const FuncionalidadRouter = require('../routes/funcionalidad.routes');
const RolRouter = require('../routes/rol.routes');
const UsuarioRouter = require('../routes/usuario.routes');
const AuthRouter = require('../routes/auth.routes');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/unidad',unidadRouter);
  router.use('/cliente',clienteRouter);
  router.use('/recurso',RecursoRouter);
  router.use('/orden',OrdenRouter);
  router.use('/concorde',ConcordeRouter);
  router.use('/taorcora',TaorcoraRouter);
  router.use('/vitacora',VitacoraRouter);
  router.use('/servicio',ServicioRouter);
  router.use('/periodo',PeriodoRouter);
  router.use('/funcionalidad',FuncionalidadRouter);
  router.use('/rol',RolRouter);
  router.use('/usuario',UsuarioRouter);
  router.use('/auth',AuthRouter);

}

module.exports = routerApi;
