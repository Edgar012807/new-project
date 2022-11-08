'use strict';

const {PeriodoSchema,PERIODO_TABLE} = require('../models/periodo.model');
const {ServicioSchema,SERVICIO_TABLE} = require('../models/servicio.model');
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable(PERIODO_TABLE,PeriodoSchema);
    await queryInterface.createTable(SERVICIO_TABLE,ServicioSchema);
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.drop(PERIODO_TABLE);
     await queryInterface.drop(SERVICIO_TABLE);
  }
};

