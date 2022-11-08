const jwt = require('jsonwebtoken');
const musuario = require('../modelos/usuario');

module.exports = {
    listar: (req, res) => {
        musuario.listar((err,results)=> {
            if(err) {
                console(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    login: (req, res) => {
        const body = req.body;
        musuario.verifica(body, (err, results) => {
            if(err) return res.status(500).send("Error en la Base de Datos");
            if(results) {
                jwt.sign(JSON.stringify(results), process.env.SECRET, (err, token) => {
                    return res.status(200).json({
                        userdata: results,
                        token: token
                    });
                });
            }
            else return res.status(403).send('Credenciales Erroneas');
        });
    }
}