'use strict';
const {ClienteSchema,CLIENTE_TABLE} = require('../models/cliente.model');
const {OrdenSchema,ORDEN_TABLE} = require('../models/orden.model');
const {ConcordeSchema,CONCORDE_TABLE} = require('../models/concorde.model');
const {TaorcoraSchema,TAORCORA_TABLE} = require('../models/taorcora.model');
const {VitacoraSchema,VITACORA_TABLE} = require('../models/vitacora.model');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CLIENTE_TABLE,ClienteSchema);
    await queryInterface.createTable(ORDEN_TABLE,OrdenSchema);
    await queryInterface.createTable(CONCORDE_TABLE,ConcordeSchema);
    // await queryInterface.createTable(TAORCORA_TABLE,TaorcoraSchema);
    // await queryInterface.createTable(VITACORA_TABLE,VitacoraSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(CLIENTE_TABLE);
    await queryInterface.drop(ORDEN_TABLE);
    await queryInterface.drop(CONCORDE_TABLE);
    // await queryInterface.drop(TAORCORA_TABLE);
    // await queryInterface.drop(VITACORA_TABLE);
  }
};
