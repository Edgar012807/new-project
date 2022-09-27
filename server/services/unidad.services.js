const boom = require('@hapi/boom');

//const pool = require('../libs/postgres.pool');
const {models} = require('../libs/sequelize');
class UnidadService {

  constructor(){
   /*  this.pool = pool;
    this.pool.on('error',(err) =>console.error(err)); */
  }


  async create(data){
   const nwUnid = await models.Unidad.create(data);
    return nwUnid;
  }

  async find(){
    const rta = await models.Unidad.findAll();
    return rta;

  }

  async findOne(id){
    const uni = await models.Unidad.findByPk(id);
    if(!uni){
      throw boom.notFound('unidad no encontrada');
    }
    return uni;
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
  module.exports = UnidadService;



