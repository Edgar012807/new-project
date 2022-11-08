const boom = require('@hapi/boom');

//const pool = require('../libs/postgres.pool');
const {models} = require('../libs/sequelize');
class RolService {

  constructor(){
   /*  this.pool = pool;
    this.pool.on('error',(err) =>console.error(err)); */
  }

  //creacion de cliente
  async create(data){
   const newCliente = await models.Rol.create(data);
    return newCliente;
  }
  //listado de cliente
  async find(){
    const rta = await models.Rol.findAll();
    return rta;

  }

  async findOne(id){
    const cliente = await models.Cliente.findByPk(id ,{
      include: ['orden']
    });
    if(!cliente){
      throw boom.notFound('cliente no encontrado');
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
  module.exports = RolService;



