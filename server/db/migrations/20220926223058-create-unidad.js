'use strict';
const {UnidadSchema,UNIDAD_TABLE} = require('../models/unidad.model');


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(UNIDAD_TABLE,UnidadSchema);


  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(UNIDAD_TABLE);

  }
};
