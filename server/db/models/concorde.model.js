const { Model, DataTypes, Sequelize } = require('sequelize');
const {ORDEN_TABLE} = require('../models/orden.model');
const CONCORDE_TABLE = 'concorde';
const ConcordeSchema = {
  coorid: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

  },
  coordesc: { allowNull: false, type: DataTypes.STRING(100) },


  ordenadoOrdeid: {
    field:'coororde',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model:ORDEN_TABLE,
      key:'ordeid',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'



  },
  coorunid: { allowNull: true, type: DataTypes.INTEGER},

};
class Concorde extends Model {
  static associate(models) {
    this.belongsTo(models.Orden,{
      as:'ordenado'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CONCORDE_TABLE,
      modelName: 'Concorde',
      timestamps: false,
    };
  }
}
module.exports = { CONCORDE_TABLE, ConcordeSchema, Concorde };
