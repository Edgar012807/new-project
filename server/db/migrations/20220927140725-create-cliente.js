'use strict';
const {ClienteSchema,CLIENTE_TABLE} = require('../models/cliente.model');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CLIENTE_TABLE,ClienteSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(CLIENTE_TABLE);
  }
};
