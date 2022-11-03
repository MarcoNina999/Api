const coneccion = require('../basedatos');

module.exports = {
    agregar:(datos, callBack) => {
        coneccion.query(
            'INSERT INTO POSTULANTE (nombre, ci, carrera, tel, materia, foto) values (?, ?, ?, ?, ?, ?)',
            [datos.nombre, datos.ci, datos.carrera, datos.tel, datos.materia, datos.foto],
            (error, results)=>{
                if(error) callBack(error);
                return callBack(null, results);
            }
        )
    }
}