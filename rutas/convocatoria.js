const express = require('express');
const ruta = express.Router();
const cconvocatoria = require('../controladores/convocatoria');

ruta.get('/listar', cconvocatoria.listar);
module.exports = ruta;