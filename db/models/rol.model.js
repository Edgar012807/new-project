const { Model, DataTypes, Sequelize } = require('sequelize');
const ROL_TABLE = 'rol';
const RolSchema = {
  roid: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

  },
  rorol: { allowNull: false, type: DataTypes.STRING(100) },
  roldesc:{allowNull: false, type: DataTypes.STRING(200)},

};
class Rol extends Model {
  static associate(models) {
    this.hasMany(models.RolesXusuario,{
      as:'RXR',
      foreignKey:'rolRoid'
    });
    this.hasMany(models.FuncxRol,{
      as:'FXR',
      foreignKey:'roleRoid'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ROL_TABLE,
      modelName: 'Rol',
      timestamps: false,
    };
  }
}
module.exports = { ROL_TABLE, RolSchema, Rol };
