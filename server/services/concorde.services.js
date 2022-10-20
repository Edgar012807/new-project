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

    const {ordenadoOrdeid, coorUnidid } = data ;
    const clOr = ordenadoOrdeid.split(' ');
    const clUn = coorUnidid.split(' ');
    data.ordenadoOrdeid =clOr[0];
    data.coorUnidid =clUn[0];
   const newCliente = await models.Concorde.create(data);


   return newCliente;
  }
  //listado de cliente
  async find(query){

    const options = {
      include:['ordenado'],
      where:{}
    }
    const {orden} = query;
    /* console.log(orden); */
    //const ordenObtenida = orden.split(' ');
    //console.log('casa', ordenObtenida[0]);
     if (orden){
      options.where.ordenadoOrdeid = orden;
    }
    const rta = await models.Concorde.findAll(options);
    return rta;

  }
  async findOrden(){
    const rta = await models.Orden.findAll({
      include: ['cliente'],
    });
    return rta;

  }
  async findUnidad(){
    const rta = await models.Unidad.findAll();
    return rta;

  }

  async findOne(id){
    const cliente = await models.Concorde.findByPk(id);
    if(!cliente){
      throw boom.notFound(`Concepto x Orden # ${id} no encontrado `);
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



