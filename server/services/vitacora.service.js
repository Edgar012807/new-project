const boom = require('@hapi/boom');
const { Vitacora } = require('../db/models/vitacora.model');

//const pool = require('../libs/postgres.pool');
const {models} = require('../libs/sequelize');
class VitacoraService {

  constructor(){
   /*  this.pool = pool;
    this.pool.on('error',(err) =>console.error(err)); */
  }

  //creacion de cliente
  async create(data){
   const newCliente = await models.Vitacora.create(data);
    return newCliente;
  }
  //listado de cliente
  async find(query){
    const options = {
      include:[{
        model:models.Concorde,
        as:"vrtc",
        include:[{
          model:models.Orden,
          as:'ordenado'
        }]
      }],
      where:{}
    }
    const {concepto} = query
    if(concepto){
      options.where.vrtcCoorid = concepto;
    }
    const rta = await models.Vitacora.findAll(options);
    return rta;

  }

  async findOne(id){
    const cliente = await models.Vitacora.findByPk(id);
    if(!cliente){
      throw boom.notFound('cliente no encontrado');
    }
    return cliente;
  }
  async findConcepto(id){
    const concepto = await models.Concorde.findAll({
      where:{
        ordenadoOrdeid:id
      }
    })

    return concepto

  }

  async update(id,changes){
    const uni = await this.findOne(id);
    const rta = await uni.update(changes);
    return rta;
  }

  async delete (id){
    const uni = await this.findOne(id);
    await uni.destroy();
    return {id};
  }
  async findOrden(){
    const rta = await models.Orden.findAll();
    return rta;

  }
}
  module.exports = VitacoraService;



