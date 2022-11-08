const boom = require('@hapi/boom');


//const pool = require('../libs/postgres.pool');
const {models} = require('../libs/sequelize');
const sequelize = require('../libs/sequelize');
class OrdenService {

  constructor(){
   /*  this.pool = pool;
    this.pool.on('error',(err) =>console.error(err)); */
  }

  //creacion de orden
  async create(data){

    /* const {clienteClienit} = data ;
    const cls = clienteClienit.split(' ');
    data.clienteClienit =cls[0]; */
   const newOrden = await models.Orden.create(data);
    return newOrden;
  }
  //listado de orden
  async find(){
    const rta = await models.Orden.findAll({
      include: ['cliente'],
      order: [['ordeid', 'ASC']]

      });
    return rta;

  }
  async findClienteOrden(id){
    const concepto = await models.Orden.findAll({
      where:{
        clienteClienit:id
      }
    })

    return concepto

  }
  //lista de ordenes que tienen saldo
  async findClienteOrdena(id){
    const query =`SELECT * from orden where (  ordevato - ordeveje)>0 and ordeid=${id}`
    const [data] = await sequelize.query(query);
    return data

  }

  
  async findCliente(){
    const rta = await models.Cliente.findAll();
    return rta;

  }

  async findOn(id){
    const orden = await models.Orden.findOne({
      where:{ordeid:id},
      include: ['cliente'],
    });
    if(!orden){
      throw boom.notFound('Orden no encontrada');
    }
    return orden;
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



