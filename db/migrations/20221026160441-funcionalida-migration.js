'use strict';

const {FuncionalidadSchema,FUNCIONALIDAD_TABLE} = require('../models/funcionalidad.model');
const {FuncXRolSchema,FUNCXROL_TABLE} = require('../models/funcxrol.model');
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable(FUNCIONALIDAD_TABLE,FuncionalidadSchema);
    await queryInterface.createTable(FUNCXROL_TABLE,FuncXRolSchema);

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.drop(FUNCIONALIDAD_TABLE);
     await queryInterface.drop(FUNCXROL_TABLE);

  }
};
