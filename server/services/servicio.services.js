
const boom = require('@hapi/boom');

//const pool = require('../libs/postgres.pool');
const {models} = require('../libs/sequelize');
class ServicioService {

  constructor(){
   /*  this.pool = pool;
    this.pool.on('error',(err) =>console.error(err)); */
  }

  //creacion de Recurso
  async create(data){
   const newRecurso = await models.Servicio.create(data);
    return newRecurso;
  }
  //listado de Recurso
  async find(){
    const rta = await models.Servicio.findAll();
    return rta;

  }

  async findOne(id){
    const Recurso = await models.Servicio.findByPk(id);
    if(!Recurso){
      throw boom.notFound('Servico no encontrado');
    }
    return Recurso;
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
  module.exports = ServicioService;



