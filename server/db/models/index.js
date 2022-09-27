const { Unidad,UnidadSchema } = require('./unidad.model');
const { Cliente,ClienteSchema } = require('./cliente.model');


function setupModels(sequelize) {
  Unidad.init(UnidadSchema, Unidad.config(sequelize));
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
}
module.exports = setupModels;
