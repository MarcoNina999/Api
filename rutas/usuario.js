const express = require('express');
const ruta = express.Router();
const cusuario = require('../controladores/usuario');

ruta.get('/listar', cusuario.listar);
ruta.post('/login', cusuario.login);
module.exports = ruta;