'use strict';

const {UsuarioSchema,USUARIO_TABLE} = require('../models/usuario.model');
const {RolSchema,ROL_TABLE} = require('../models/rol.model');
const {RolesXusuarioSchema,ROLESxUSUARIO_TABLE} = require('../models/rolesxusuario.model');
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable(USUARIO_TABLE,UsuarioSchema);
    await queryInterface.createTable(ROL_TABLE,RolSchema);
    await queryInterface.createTable(ROLESxUSUARIO_TABLE,RolesXusuarioSchema);
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.drop(USUARIO_TABLE);
     await queryInterface.drop(ROL_TABLE);
     await queryInterface.drop(ROLESxUSUARIO_TABLE);
  }
};
