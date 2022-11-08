const { Model, DataTypes, Sequelize } = require('sequelize');
const {ORDEN_TABLE} = require('../models/orden.model');
const {UNIDAD_TABLE} = require('../models/unidad.model');
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
  coorUnidid: {
    field:'coorunid',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model:UNIDAD_TABLE,
      key:'unidid'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

};
class Concorde extends Model {
  static associate(models) {
    this.belongsTo(models.Orden,{
      as:'ordenado'
    });
    this.belongsTo(models.Unidad,{
      as:'coor'
    });
    this.hasMany(models.Taorcora,{
      as:'taord',
      foreignKey:'torcCoorid'
    });
    this.hasMany(models.Vitacora,{
      as:'vitarc',
      foreignKey:'vrtcCoorid'
    })
    this.hasMany(models.Servicio,{
      as:'ser',
      foreignKey:'conCoorid'
    })

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
