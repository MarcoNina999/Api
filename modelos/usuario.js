const coneccion = require('../basedatos');

module.exports = {
    modificar: (datos, callBack) => {
        coneccion.query(
            'UPDATE usuario set usuario = ?, contra = ?, nombre = ?, tipo = ? WHERE id = ?',
            [datos.usuario, datos.contra, datos.nombre, datos.tipo, datos.id],
            (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    borrar:(id, callBack) => {
        coneccion.query(
            'DELETE FROM usuario WHERE id=?',
            [id],
            (error, results, fields)=>{
                if(error) callBack(error);
                return callBack(null, results);
            }
        )
    },
    agregar: (datos, callBack) => {
        coneccion.query(
            'INSERT INTO usuario (usuario, contra, nombre, tipo) VALUE ()',
            [datos.usuario, datos.contra, datos.nombre, datos.tipo],
            (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    listar:(datos, callBack) => {
        coneccion.query(
            'SELECT * FROM usuario',
            [datos.nombre, datos.ci, datos.carrera, datos.tel, datos.materia, datos.foto],
            (error, results)=>{
                if(error) callBack(error);
                return callBack(null, results);
            }
        )
    },
    verifica: (datos, callBack) => {
        coneccion.query(
            'SELECT * FROM usuario WHERE usuario = ? and contra = ?',
            [datos.usuario, datos.contra],
            (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
}