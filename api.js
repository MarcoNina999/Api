const express = require('express');
const dotenv = require('dotenv');
const bodypaarser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

var corsOptions = {
    origin: ['https://127.0.0.1:5000', 'https://localhost:8080'],
    optionsSuccessStatus: 200
}

const app = express();

app.use(bodypaarser.json());
app.use(bodypaarser.urlencoded({extended:true}));
app.use(fileUpload());
app.use(cors(corsOptions));

app.use(require('./rutas/index'));
app.use('/postulante', require('./rutas/postulante'));
app.use('/convocatoria', require('./rutas/convocatoria'));


app.listen(process.env.PORT,()=>{
    console.log('ya funciona el servidor');
})