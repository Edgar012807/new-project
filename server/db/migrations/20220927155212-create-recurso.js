'use strict';
const {RecursoSchema,RECURSO_TABLE} = require('../models/recurso.model');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(RECURSO_TABLE,RecursoSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(RECURSO_TABLE);
  }
};
