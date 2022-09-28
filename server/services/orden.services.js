const boom = require('@hapi/boom');

//const pool = require('../libs/postgres.pool');
const {models} = require('../libs/sequelize');
class OrdenService {

  constructor(){
   /*  this.pool = pool;
    this.pool.on('error',(err) =>console.error(err)); */
  }

  //creacion de cliente
  async create(data){
   const newOrden = await models.Orden.create(data);
    return newOrden;
  }
  //listado de cliente
  async find(){
    const rta = await models.Orden.findAll({
      include: ['cliente']
    });
    return rta;

  }

  async findOne(id){
    const orden = await models.Orden.findByPk(id);
    if(!orden){
      throw boom.notFound('Orden no encontrada');
    }
    return orden;
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


  async fecha (feRecibido,feInicio,feFin){
    if(Date.parse(feRecibido)<Date.parse(feInicio) || Date.parse(feRecibido)<Date.parse(feFin)   ){
      throw boom.badRequest('Fecha invalida');

  }
    if(Date.parse(feFin)<Date.parse(feInicio) ){
      throw boom.badRequest(`Fecha invalida ${feFin}`);

  }
  return true;
  }
}
  module.exports = OrdenService;



