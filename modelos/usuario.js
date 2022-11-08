const coneccion = require('../basedatos');

module.exports = {
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