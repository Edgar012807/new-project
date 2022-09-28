const boom = require('@hapi/boom');

//const pool = require('../libs/postgres.pool');
const {models} = require('../libs/sequelize');
class ConcordeService {

  constructor(){
   /*  this.pool = pool;
    this.pool.on('error',(err) =>console.error(err)); */
  }

  //creacion de cliente
  async create(data){
   const newCliente = await models.Concorde.create(data);
    return newCliente;
  }
  //listado de cliente
  async find(){
    const rta = await models.Concorde.findAll({
      include:['ordenado']
    });
    return rta;

  }

  async findOne(id){
    const cliente = await models.Concorde.findByPk(id);
    if(!cliente){
      throw boom.notFound('Concepto x Orden no encontrado');
    }
    return cliente;
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

}
  module.exports = ConcordeService;



