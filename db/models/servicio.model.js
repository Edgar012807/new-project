const { Model, DataTypes, Sequelize } = require('sequelize');
const {ORDEN_TABLE} = require('../models/orden.model');
const {UNIDAD_TABLE} = require('../models/unidad.model');
const {RECURSO_TABLE} = require('../models/recurso.model');
const {CLIENTE_TABLE} = require('../models/cliente.model');
const {CONCORDE_TABLE} = require('../models/concorde.model');
const {PERIODO_TABLE} = require('../models/periodo.model');
const SERVICIO_TABLE = 'servicio';
const ServicioSchema = {

  clienClieid: {
    field:'servclie',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model:CLIENTE_TABLE,
      key:'clieid',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  ordenOrdeid: {
    field:'servorde',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model:ORDEN_TABLE,
      key:'ordeid',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  conCoorid: {
    field:'servconc',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model:CONCORDE_TABLE,
      key:'coorid',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  uniUnidid: {
    field:'servunid',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model:UNIDAD_TABLE,
      key:'unidid'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  servfech: {
    allowNull: false,
    type: DataTypes.DATEONLY,

  },
  recuRecucodi: {
    field:'servrecu',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model:RECURSO_TABLE,
      key:'recucodi'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  servcant: {
    allowNull: false,
    type: DataTypes.BIGINT(6),
  },
  servvalo: {
    allowNull: true,
    type: DataTypes.BIGINT(15),
  },
  servano:{
    allowNull: true,
    type: DataTypes.BIGINT(15),
  },
  servmes:{
    allowNull: true,
    type: DataTypes.BIGINT(15),
  },
  servmoda: {
    allowNull: false,
    type: DataTypes.STRING(1),
    defaultValue: 'N'
  },
  servcost: {
    allowNull: true,
    type: DataTypes.BIGINT(15),
  },
  servesta: {
    allowNull: false,
    type: DataTypes.STRING(1),
    defaultValue: 'E'

  },

  periPericodi: {
    field:'servperio',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model:PERIODO_TABLE,
      key:'pericodi'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  servunita: {
    allowNull: true,
    type: DataTypes.INTEGER,

  },


};
class Servicio extends Model {
  static associate(models) {
    this.belongsTo(models.Cliente,{
      as:'clien'
    });
    this.belongsTo(models.Orden,{
      as:'orden'
    });
    this.belongsTo(models.Concorde,{
      as:'con'
    });
    this.belongsTo(models.Unidad,{
      as:'uni'
    });
    this.belongsTo(models.Recurso,{
      as:'recu'
    });
    this.belongsTo(models.Periodo,{
      as:'peri'
    });


  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: SERVICIO_TABLE,
      modelName: 'Servicio',
      timestamps: false,
    };
  }
}
module.exports = { SERVICIO_TABLE, ServicioSchema, Servicio };
