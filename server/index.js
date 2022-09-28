// importacion del modulo express
const express = require('express');
const morgan = require('morgan');


const app = express();
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler,ormErrorHandler } = require('./middlewares/error.handler')

//settings
app.use(express.json());

app.set('port', process.env.PORT ||3006);

//routes
app.get('/',(req,res)=>{
  res.send('Hello world');
})

//middlewares

app.use(morgan('dev'));

routerApi(app);
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


// start
app.listen(app.get('port'),()=>{
  console.log(`Server on port ${app.get('port')}`)
})
