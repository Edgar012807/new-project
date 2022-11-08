const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
//const pool = require('../libs/postgres.pool');
const {models} = require('../libs/sequelize');
class UsuarioService {

  constructor(){
   /*  this.pool = pool;
    this.pool.on('error',(err) =>console.error(err)); */
  }

  //creacion de cliente
  async create(data){
    console.log(data);
    const hash = await bcrypt.hash(data.usepass,10);
    const newUsuario = await models.Usuario.create({
      ...data,
      usepass:hash
    });
     delete newUsuario.dataValues.usepass;
    return newUsuario;
  }
  //listado de cliente
  async find(){
    const options = {
      include: [
        {
          model: models.RolesXusuario,
          as: 'RXU',
          include: [
            {
              model: models.Rol,
              as: 'rol',
            },
          ],
        },
      ],
      /* order: [['tocrid', 'ASC']],
      where: {}, */
    };

    const rta = await models.Usuario.findAll(options);
    return rta;

  }
  async findByEmail(usenomb) {
    const options = {
      include: [
        {
          model: models.RolesXusuario,
          as: 'RXU',
          include: [
            {
              model: models.Rol,
              as: 'rol',
            },
          ],
        },
      ],
      where: {
        usenomb
      }
      /* order: [['tocrid', 'ASC']],
     , */
    };
    const rta = await models.Usuario.findOne(options);
   /*  console.log('casaa')
   console.log( rta.dataValues.user.dataValues.RXU) */
    return rta;
  }

  async findOne(id){
    const cliente = await models.Usuario.findByPk(id ,{
      include: ['RXU']
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
  module.exports = UsuarioService;



