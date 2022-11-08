const { Model, DataTypes, Sequelize } = require('sequelize');
const {FUNCIONALIDAD_TABLE} = require('../models/funcionalidad.model');
const {ROL_TABLE} = require('../models/rol.model');
const FUNCXROL_TABLE = 'funcxrol';
const FuncXRolSchema = {
  funxrolid: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

  },
  funcionFunid: {
    field:' funcid',
    allowNull: false,

    type: DataTypes.INTEGER,
    references: {
      model:FUNCIONALIDAD_TABLE,
      key:'funid'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  roleRoid: {
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
class FuncxRol extends Model {
  static associate(models) {
    this.belongsTo(models.Funcionalidad,{
      as:'funcion',
    });
    this.belongsTo(models.Rol,{
      as:'role',
    });

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: FUNCXROL_TABLE,
      modelName: 'FuncxRol',
      timestamps: false,
    };
  }
}
module.exports = { FUNCXROL_TABLE, FuncXRolSchema, FuncxRol };
