const { Model, DataTypes, Sequelize } = require('sequelize');
const CLIENTE_TABLE = 'cliente';
const ClienteSchema = {
  clienit: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

  },
  clienomb: { allowNull: false, type: DataTypes.STRING(100) },
  clieesta: { allowNull: false, type: DataTypes.STRING(2), defaultValue: "A" },

};
class Cliente extends Model {
  static associate() {}
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
