const { Model, DataTypes, Sequelize } = require('sequelize');

const {CLIENTE_TABLE} = require('../models/cliente.model');
const ORDEN_TABLE = 'orden';
const OrdenSchema = {
  ordeid: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  ordenume: { allowNull: false, type: DataTypes.STRING(100) },
  ordedesc: { allowNull: false, type: DataTypes.STRING(200), defaultValue: 0},
  ordeobje: { allowNull: false, type: DataTypes.STRING(500) },
  ordefere: { allowNull: false, type: DataTypes.DATEONLY },

  ordefein: { allowNull: false, type: DataTypes.DATEONLY },
  ordefefi: { allowNull: false, type: DataTypes.DATEONLY },
  ordevato: { allowNull: false, type: DataTypes.INTEGER },
  ordeveje: { allowNull: false, type: DataTypes.INTEGER ,defaultValue: 0},
  clienteClieid: {
    field:' ordeclie',
    allowNull: false,

    type: DataTypes.INTEGER,
    references: {
      model:CLIENTE_TABLE,
      key:'clieid'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  ordeconta:{
    allowNull:false,
    type: DataTypes.STRING(100)
  },
  ordeobev:{
    allowNull:false,
    type: DataTypes.STRING(100)
  }
};
class Orden extends Model {
  static associate(models) {
    this.belongsTo(models.Cliente,{
      as:'cliente',
    });
    this.hasMany(models.Concorde,{
      as:'concorde',
      foreignKey:'ordenadoOrdeid'
    })
    this.hasMany(models.Servicio,{
      as:'servi',
      foreignKey:'ordenOrdeid'
    })

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDEN_TABLE,
      modelName: 'Orden',
      timestamps: false,
    };
  }
}
module.exports = { ORDEN_TABLE, OrdenSchema, Orden };
