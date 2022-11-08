
const boom = require('@hapi/boom');

//const pool = require('../libs/postgres.pool');
const {models } = require('../libs/sequelize');
const sequelize = require('../libs/sequelize');
class ServicioService {

  constructor(){
   /*  this.pool = pool;
    this.pool.on('error',(err) =>console.error(err)); */
  }

  //creacion de Recurso
  async create(data){
    let valor;
   const calca = await this.calculoValor(data.conCoorid,data.servcant);
   if(!calca.length){
     //valor = 0;
     throw boom.notFound('Cantidad no valida');
   }else{
    data.servunita = Number(calca[0].tocrvalo);
     valor = Number(calca[0].tocrvalo) * data.servcant;

   }
   console.log(valor)
   data.servvalo = valor
   const newRecurso = await models.Servicio.create(data);
    return newRecurso;
    //console.log(calca);
    // return calca
  }
  //listado de Recurso
  async find(){
    const rta = await models.Servicio.findAll({
      include:['clien']
    });
    return rta;

  }
  async findClient(){
    const rta = await models.Cliente.findAll();
    return rta;

  }
  async findRecurso(){
    const rta = await models.Recurso.findAll();
    return rta;

  }

  async findOne(id){
    const Recurso = await models.Servicio.findByPk(id);
    console.log(Recurso)
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

  async calculoValor(id,cantidad){
    const query =`Select tocrvalo from taorcora where torcronc = ${id} and  ${cantidad} BETWEEN tocrrain AND tocrrafi `
    const [data] = await sequelize.query(query);
    return data
    //console.log(data);

  }

}
module.exports = ServicioService;



