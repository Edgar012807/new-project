const { Model, DataTypes, Sequelize } = require('sequelize');
const {CONCORDE_TABLE} = require('../models/concorde.model')
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

};
class Vitacora extends Model {
  static associate(models) {
    this.belongsTo(models.Concorde,{
      as:'vrtc'
    })
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
