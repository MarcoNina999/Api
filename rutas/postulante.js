const express = require('express');
const ruta = express.Router();
const cpostulante = require('../controladores/postulante');

ruta.post('/agregar', cpostulante.agregar);
module.exports = ruta;