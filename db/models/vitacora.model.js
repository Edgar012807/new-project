const { Model, DataTypes, Sequelize } = require('sequelize');
const {CONCORDE_TABLE} = require('../models/concorde.model')
const {TAORCORA_TABLE} = require('../models/taorcora.model')
const VITACORA_TABLE = 'vitacora';
const VitacoraSchema = {
  vrtcCoorid: {
    field:'vtcronc',
    autoIncrement: false,
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model:CONCORDE_TABLE,
      key:'coorid'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  vtcrain: {
    allowNull: false,
    type: DataTypes.DATEONLY
  },
  vtcrrafi: {
    allowNull: false,
    type: DataTypes.DATEONLY
   },
  vtcrvalo: {
     allowNull: false,
      type: DataTypes.INTEGER,
    },
    vtcrTocrid:{
      field:'vtcrconsect',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model:TAORCORA_TABLE,
      key:'tocrid'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
    }

};
class Vitacora extends Model {
  static associate(models) {
    this.belongsTo(models.Concorde,{
      as:'vrtc'
    });
    this.belongsTo(models.Taorcora,{
      as:'vtcr'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: VITACORA_TABLE,
      modelName: 'Vitacora',
      timestamps: false,
    };
  }
}
module.exports = { VITACORA_TABLE, VitacoraSchema, Vitacora };
