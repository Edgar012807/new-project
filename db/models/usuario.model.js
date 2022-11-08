const { Model, DataTypes, Sequelize } = require('sequelize');
const USUARIO_TABLE = 'usuario';
const UsuarioSchema = {
  useid: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

  },
  usenomb: { allowNull: false, type: DataTypes.STRING(100) },
  usepass:{allowNull: false, type: DataTypes.STRING(150)},

};
class Usuario extends Model {
  static associate(models) {
    this.hasMany(models.RolesXusuario,{
      as:'RXU',
      foreignKey:'usuarioUseid'
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'Usuario',
      timestamps: false,
    };
  }
}
module.exports = { USUARIO_TABLE, UsuarioSchema, Usuario };
