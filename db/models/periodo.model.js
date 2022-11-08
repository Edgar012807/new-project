const { Model, DataTypes, Sequelize } = require('sequelize');
const PERIODO_TABLE = 'periodo';
const PeriodoSchema = {
  pericodi: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  periano: { allowNull: false, type: DataTypes.BIGINT(15) },
  perimes: { allowNull: false, type: DataTypes.BIGINT(15)},
  periesta: { allowNull: false, type: DataTypes.STRING(50),defaultValue: 'A' },
  peridesc: { allowNull: false, type: DataTypes.STRING(100)},
};

class Periodo extends Model {
  static associate(models) {
    this.hasMany(models.Servicio,{
      as:'see',
      foreignKey:'periPericodi',
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PERIODO_TABLE,
      modelName: 'Periodo',
      timestamps: false,
    };
  }
}
module.exports = { PERIODO_TABLE, PeriodoSchema, Periodo };
