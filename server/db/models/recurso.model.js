const { Model, DataTypes, Sequelize } = require('sequelize');
const RECURSO_TABLE = 'recurso';
const RecursoSchema = {
  recucodi: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  recunomb: { allowNull: false, type: DataTypes.STRING(100) },
  recusuho: { allowNull: false, type: DataTypes.INTEGER, defaultValue: 0},
  recuvanu: { allowNull: false, type: DataTypes.INTEGER },
  recutoco: { allowNull: false, type: DataTypes.INTEGER },
};
class Recurso extends Model {
  static associate(models) {
    this.hasMany(models.Servicio,{
      as:'see',
      foreignKey:'recuRecucodi',
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: RECURSO_TABLE,
      modelName: 'Recurso',
      timestamps: false,
    };
  }
}
module.exports = { RECURSO_TABLE, RecursoSchema, Recurso };
