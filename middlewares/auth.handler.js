const boom = require('@hapi/boom');

const rolService = require('../services/roles.service');
const funcionService = require('../services/funcionalidad.service');
const serviceFuncion = new funcionService();

const service = new rolService();

const { config } = require('../config/config');
function checkApiKey(req, res, next) {

  const apiKey = req.headers['api'];


  if (apiKey === config.apikey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

function checkAdminRole(req, res, next) {
  console.log(req.user);
  const user = req.user;
  if (user.role === 'admin') {
    next();
  } else {
    next(boom.unauthorized('no estas autorizado'));
  }
}

 function checkRoles(num) {
  return async(req, res, next) => {
    const user = req.user;
    const rx = [];
    const roles = await service.find();
    const func = await serviceFuncion.findFuncionRol(num);
    func.forEach((items=>rx.push(items.role.rorol)))
    const tr = rx.some(items =>user.role.includes(items))
    console.log("hay algun rol ->>>>",tr)
    if (tr) {
      next();
    } else {
      next(boom.unauthorized('no estas autorizado'));
    }
  }
}

module.exports = { checkApiKey, checkAdminRole ,checkRoles};
