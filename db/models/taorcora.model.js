const { Model, DataTypes, Sequelize } = require('sequelize');
const {CONCORDE_TABLE} = require('../models/concorde.model')
const TAORCORA_TABLE = 'taorcora';
const TaorcoraSchema = {
  tocrid: {
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  torcCoorid: {
    field:'torcronc',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model:CONCORDE_TABLE,
      key:'coorid'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  tocrrain: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  tocrrafi: {
    allowNull: false,
    type: DataTypes.INTEGER
   },
  tocrvalo: {
     allowNull: false,
      type: DataTypes.INTEGER,
    },

};
class Taorcora extends Model {
  static associate(models) {
    this.belongsTo(models.Concorde,{
      as:'torc'
    });
    this.hasMany(models.Vitacora,{
      as:'vita',
      foreignKey:'vtcrTocrid'
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TAORCORA_TABLE,
      modelName: 'Taorcora',
      timestamps: false,
    };
  }
}
module.exports = { TAORCORA_TABLE, TaorcoraSchema, Taorcora };
