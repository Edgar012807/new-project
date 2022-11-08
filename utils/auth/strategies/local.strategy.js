const {Strategy} = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('./../../../services/usuario.service');

const service = new UserService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async(email,password,done)=>{
  try {
   const user = await service.findByEmail(email);
   //console.log(user.RXU.rol);
   if(!user){
    done(boom.unauthorized('este Usuario no existe '),false);
   }
/*    console.log(user.usepass)
   if(user.usepass != password){
    done(boom.unauthorized('esta password no coinciden'),false);
   } */
   const isMatch = await bcrypt.compare(password,user.usepass);
   if(!isMatch){
    done(boom.unauthorized('esta password no coinciden'),false);
   }
   delete user.dataValues.usepass;
   done(null,user);
  } catch (error) {
    done(error,false);
  }



});


module.exports = LocalStrategy;
