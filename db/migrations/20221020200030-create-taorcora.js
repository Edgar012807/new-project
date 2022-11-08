'use strict';


const {TaorcoraSchema,TAORCORA_TABLE} = require('../models/taorcora.model');
const {VitacoraSchema,VITACORA_TABLE} = require('../models/vitacora.model');
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable(TAORCORA_TABLE,TaorcoraSchema);
     await queryInterface.createTable(VITACORA_TABLE,VitacoraSchema);
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.drop(TAORCORA_TABLE);
    await queryInterface.drop(VITACORA_TABLE);
  }
};
