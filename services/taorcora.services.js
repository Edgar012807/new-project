const boom = require('@hapi/boom');

//const pool = require('../libs/postgres.pool');
const { models } = require('../libs/sequelize');
class TaorcoraService {
  constructor() {
    /*  this.pool = pool;
    this.pool.on('error',(err) =>console.error(err)); */
  }

  //creacion de cliente
  async create(data) {
    const newCliente = await models.Taorcora.create(data);
    return newCliente;
  }
  //listado de cliente
  async find(query) {
    const { concepto , limit,offset} = query;
    const options = {
      include: [
        {
          model: models.Concorde,
          as: 'torc',
          include: [
            {
              model: models.Orden,
              as: 'ordenado',
            },
          ],
        },
      ],
      order: [['tocrid', 'ASC']],
      where: {},
    };


    if (limit && offset ){
      options.limit = limit;
      options.offset = offset;

    }

    if (concepto) {
      options.where.torcCoorid = concepto;
    }
    const rta = await models.Taorcora.findAll(options);
    return rta;
  }

  async findOne(id) {
    const taorcora = await models.Taorcora.findByPk(id);
    if (!taorcora) {
      throw boom.notFound('TARIFA X ORDEN X CONCEPTO X RANGO No Encontrada');
    }
    return taorcora;
  }
  async findOrden() {
    const rta = await models.Orden.findAll();
    return rta;
  }

  async update(id, changes) {
    const tar = await this.findOne(id);
    const rta = await tar.update(changes);
    return rta;
  }

  async delete(id) {
    const tar = await this.findOne(id);
    await tar.destroy();
    return { id };
  }
}
module.exports = TaorcoraService;
