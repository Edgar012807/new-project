const { Model, DataTypes, Sequelize } = require('sequelize');
const CLIENTE_TABLE = 'cliente';
const ClienteSchema = {
  clieid: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT

  },
  clienomb: { allowNull: false, type: DataTypes.STRING(100) },
  clienit:{allowNull: false, type: DataTypes.INTEGER},
  clieesta: { allowNull: false, type: DataTypes.STRING(2), defaultValue: "A" },

};
class Cliente extends Model {
  static associate(models) {
    this.hasMany(models.Orden,{
      as:'orden',
      foreignKey:'clienteClieid'
    });
    this.hasMany(models.Servicio,{
      as:'servici',
      foreignKey:'clienClieid'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENTE_TABLE,
      modelName: 'Cliente',
      timestamps: false,
    };
  }
}
module.exports = { CLIENTE_TABLE, ClienteSchema, Cliente };
