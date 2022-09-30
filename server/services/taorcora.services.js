const boom = require('@hapi/boom');

//const pool = require('../libs/postgres.pool');
const {models} = require('../libs/sequelize');
class TaorcoraService {

  constructor(){
   /*  this.pool = pool;
    this.pool.on('error',(err) =>console.error(err)); */
  }

  //creacion de cliente
  async create(data){
   const newCliente = await models.Taorcora.create(data);
    return newCliente;
  }
  //listado de cliente
  async find(){
    const rta = await models.Taorcora.findAll({
      include:['torc']
    });
    return rta;

  }

  async findOne(id){
    const taorcora = await models.Taorcora.findByPk(id );
    if(!taorcora){
      throw boom.notFound('TARIFA X ORDEN X CONCEPTO X RANGO No Encontrada');
    }
    return taorcora;
  }

  async update(id,changes){
    const tar = await this.findOne(id);
    const rta = await tar.update(changes);
    return rta;
  }

  async delete (id){
    const tar = await this.findOne(id);
    await tar.destroy();
    return {id};
  }

}
  module.exports = TaorcoraService;



