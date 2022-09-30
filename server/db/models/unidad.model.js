const { Model, DataTypes, Sequelize } = require('sequelize');
const UNIDAD_TABLE = 'unidad';
const UnidadSchema = {
  unidid: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

  },
  uniddesc: { allowNull: false, type: DataTypes.STRING },
  uniddeco: { allowNull: false, type: DataTypes.STRING , unique:true},
/*   createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  }, */
};
class Unidad extends Model {
  static associate(models) {
    this.hasMany(models.Concorde,{
      as:'concor',
      foreignKey:'coorUnidid'
    })
    this.hasMany(models.Servicio,{
      as:'serv',
      foreignKey:'uniUnidid'
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: UNIDAD_TABLE,
      modelName: 'Unidad',
      timestamps: false,
    };
  }
}
module.exports = { UNIDAD_TABLE, UnidadSchema, Unidad };
