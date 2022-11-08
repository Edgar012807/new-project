const express = require('express');
const passport = require('passport');
 const jwt =require('jsonwebtoken');
const {config} =require('../config/config');
const router = express.Router();

router.post('/login',
passport.authenticate('local',{session:false}),
async (req, res, next) => {
  try {
    const user = req.user;
    const rolesAsociados = [];
    user.RXU.forEach((element) =>rolesAsociados.push(element.rol.rorol));
    const payload = {
      sub: user.useid,
      role:rolesAsociados,
    }
    const token = jwt.sign(payload,config.jwtSecret);
    res.json({
      user,
      token
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
