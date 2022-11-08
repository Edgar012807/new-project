// importacion del modulo express
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const ejs = require('ejs');
const path = require('path');

const app = express();
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler,ormErrorHandler } = require('./middlewares/error.handler')

//settings
app.use(cors());
app.set('view engine' ,'ejs')
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const whiteList = ['http://localhost:3000','http://localhost:5174'];

const options = {
  origin:(origin,callback)=>{
    if(whiteList.includes(origin)|| !origin){
      callback(null,true);
    }else{
      callback(new Error('no permitido'))
    }
  }
}
app.use(cors(options));

app.set('port', process.env.PORT ||3001);

//routes
app.get('/',(req,res)=>{
  res.render('index.ejs');
})

//middlewares
require('./utils/auth');
app.use(morgan('dev'));

routerApi(app);
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.use(express.static(path.join(__dirname,'public')))

// start
app.listen(app.get('port'),()=>{
  console.log(`Server on port ${app.get('port')}`)
})
