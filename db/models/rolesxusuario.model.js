const { Model, DataTypes, Sequelize } = require('sequelize');
const {USUARIO_TABLE} = require('../models/usuario.model');
const {ROL_TABLE} = require('../models/rol.model');
const ROLESxUSUARIO_TABLE = 'rolesxusuario';
const RolesXusuarioSchema = {
  roid: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

  },
  usuarioUseid: {
    field:' usuaid',
    allowNull: false,

    type: DataTypes.INTEGER,
    references: {
      model:USUARIO_TABLE,
      key:'useid'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  rolRoid: {
    field:' rolid',
    allowNull: false,

    type: DataTypes.INTEGER,
    references: {
      model:ROL_TABLE,
      key:'roid'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

};
class RolesXusuario extends Model {
  static associate(models) {
    this.belongsTo(models.Usuario,{
      as:'usuario',
    });
    this.belongsTo(models.Rol,{
      as:'rol',
    });

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ROLESxUSUARIO_TABLE,
      modelName: 'RolesXusuario',
      timestamps: false,
    };
  }
}
module.exports = { ROLESxUSUARIO_TABLE, RolesXusuarioSchema, RolesXusuario };
