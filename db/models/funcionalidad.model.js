const { Model, DataTypes, Sequelize } = require('sequelize');
const FUNCIONALIDAD_TABLE = 'funcionalidad';
const FuncionalidadSchema = {
  funid: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

  },
  funNomb: { allowNull: false, type: DataTypes.STRING(100) },



};
class Funcionalidad extends Model {
  static associate(models) {
    this.hasMany(models.FuncxRol,{
      as:'RXR',
      foreignKey:'funcionFunid'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: FUNCIONALIDAD_TABLE,
      modelName: 'Funcionalidad',
      timestamps: false,
    };
  }
}
module.exports = { FUNCIONALIDAD_TABLE, FuncionalidadSchema, Funcionalidad };
