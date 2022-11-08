const { Unidad,UnidadSchema } = require('./unidad.model');
const { Cliente,ClienteSchema } = require('./cliente.model');
const { Recurso,RecursoSchema } = require('./recurso.model');
const { Orden,OrdenSchema } = require('./orden.model');
const { Concorde,ConcordeSchema } = require('./concorde.model');
const { Taorcora,TaorcoraSchema } = require('./taorcora.model');
const { Vitacora,VitacoraSchema } = require('./vitacora.model');
const { Servicio,ServicioSchema } = require('./servicio.model');
const { Periodo,PeriodoSchema } = require('./periodo.model');
const { Usuario,UsuarioSchema } = require('./usuario.model');
const { Rol,RolSchema } = require('./rol.model');
const { RolesXusuario,RolesXusuarioSchema } = require('./rolesxusuario.model');
const { Funcionalidad,FuncionalidadSchema } = require('./funcionalidad.model');
const { FuncxRol,FuncXRolSchema } = require('./funcxrol.model');


function setupModels(sequelize) {
  Unidad.init(UnidadSchema, Unidad.config(sequelize));
  Recurso.init(RecursoSchema, Recurso.config(sequelize));
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Orden.init(OrdenSchema, Orden.config(sequelize));
  Concorde.init(ConcordeSchema, Concorde.config(sequelize));
  Taorcora.init(TaorcoraSchema, Taorcora.config(sequelize));
  Vitacora.init(VitacoraSchema, Vitacora.config(sequelize));
  Servicio.init(ServicioSchema, Servicio.config(sequelize));
  Periodo.init(PeriodoSchema, Periodo.config(sequelize));
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  Rol.init(RolSchema, Rol.config(sequelize));
  RolesXusuario.init(RolesXusuarioSchema, RolesXusuario.config(sequelize));
  Funcionalidad.init(FuncionalidadSchema, Funcionalidad.config(sequelize));
  FuncxRol.init(FuncXRolSchema, FuncxRol.config(sequelize));

  Cliente.associate(sequelize.models);
  Orden.associate(sequelize.models);
  Recurso.associate(sequelize.models);
  Unidad.associate(sequelize.models);
  Concorde.associate(sequelize.models);
  Taorcora.associate(sequelize.models);
  Vitacora.associate(sequelize.models);
  Periodo.associate(sequelize.models);
  Servicio.associate(sequelize.models);
  Usuario.associate(sequelize.models);
  Rol.associate(sequelize.models);
  RolesXusuario.associate(sequelize.models);
  Funcionalidad.associate(sequelize.models);
  FuncxRol.associate(sequelize.models);



}
module.exports = setupModels;
