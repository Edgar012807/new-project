'use strict';
const {RecursoSchema,RECURSO_TABLE} = require('../models/recurso.model');
const {ServicioSchema,SERVICIO_TABLE} = require('../models/servicio.model');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(RECURSO_TABLE,RecursoSchema);
    /* await queryInterface.createTable(SERVICIO_TABLE,ServicioSchema); */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(RECURSO_TABLE);
   /*  await queryInterface.drop(SERVICIO_TABLE); */
  }
};
