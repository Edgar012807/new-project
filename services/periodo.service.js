const boom = require('@hapi/boom');

//const pool = require('../libs/postgres.pool');
const {models} = require('../libs/sequelize');
class PeriodoService {

  constructor(){
   /*  this.pool = pool;
    this.pool.on('error',(err) =>console.error(err)); */
  }

  //creacion de Recurso
  async create(data){
   const newPeriodo = await models.Periodo.create(data);
    return newPeriodo;
  }
  //listado de Recurso
  async find(){
    const rta = await models.Periodo.findAll();
    return rta;

  }

  async findOne(id){
    const periodo = await models.Periodo.findByPk(id);
    if(!periodo){
      throw boom.notFound('Periodo no encontrado');
    }
    return periodo;
  }

  async update(id,changes){
    const periodo = await this.findOne(id);
    const rta = await periodo.update(changes);
    return rta;
  }

  async delete (id){
    const periodo = await this.findOne(id);
    await periodo.destroy();
    return {id};
  }

}
  module.exports = PeriodoService;



