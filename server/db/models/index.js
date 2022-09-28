const { Unidad,UnidadSchema } = require('./unidad.model');
const { Cliente,ClienteSchema } = require('./cliente.model');
const { Recurso,RecursoSchema } = require('./recurso.model');
const { Orden,OrdenSchema } = require('./orden.model');
const { Concorde,ConcordeSchema } = require('./concorde.model');


function setupModels(sequelize) {
  Unidad.init(UnidadSchema, Unidad.config(sequelize));
  Recurso.init(RecursoSchema, Recurso.config(sequelize));
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Orden.init(OrdenSchema, Orden.config(sequelize));
  Concorde.init(ConcordeSchema, Concorde.config(sequelize));

  Cliente.associate(sequelize.models);
  Orden.associate(sequelize.models);
  Concorde.associate(sequelize.models);


}
module.exports = setupModels;
