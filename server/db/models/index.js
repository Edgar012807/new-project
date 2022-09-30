const { Unidad,UnidadSchema } = require('./unidad.model');
const { Cliente,ClienteSchema } = require('./cliente.model');
const { Recurso,RecursoSchema } = require('./recurso.model');
const { Orden,OrdenSchema } = require('./orden.model');
const { Concorde,ConcordeSchema } = require('./concorde.model');
const { Taorcora,TaorcoraSchema } = require('./taorcora.model');
const { Vitacora,VitacoraSchema } = require('./vitacora.model');
const { Servicio,ServicioSchema } = require('./servicio.model');


function setupModels(sequelize) {
  Unidad.init(UnidadSchema, Unidad.config(sequelize));
  Recurso.init(RecursoSchema, Recurso.config(sequelize));
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Orden.init(OrdenSchema, Orden.config(sequelize));
  Concorde.init(ConcordeSchema, Concorde.config(sequelize));
  Taorcora.init(TaorcoraSchema, Taorcora.config(sequelize));
  Vitacora.init(VitacoraSchema, Vitacora.config(sequelize));
  Servicio.init(ServicioSchema, Servicio.config(sequelize));

  Cliente.associate(sequelize.models);
  Orden.associate(sequelize.models);
  Recurso.associate(sequelize.models);
  Unidad.associate(sequelize.models);
  Concorde.associate(sequelize.models);
  Taorcora.associate(sequelize.models);
  Vitacora.associate(sequelize.models);
  Servicio.associate(sequelize.models);



}
module.exports = setupModels;
