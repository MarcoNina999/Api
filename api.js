const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

var corsOptions = {
    origin: ['https://127.0.0.1:8080', 'https://localhost:8080'],
    optionsSuccessStatus: 200
}

const app = express();

const morgan = require('morgan');
app.use(morgan('tiny'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(fileUpload());
app.use(cors(corsOptions));

app.use(require('./rutas/index'));
app.use('/usr', require('./rutas/usuario'));
app.use('/postulante', require('./rutas/postulante'));
app.use('/convocatoria', require('./rutas/convocatoria'));


app.listen(5000,()=>{
    console.log('ya funciona el servidor');
})