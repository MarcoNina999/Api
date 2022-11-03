const mysql = require('mysql');
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 10});

pool.getConnection( (err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('La coneccion a la base de datos fue Perdida');
        }
        if(err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene demaciadas concciones');
        }
        if(err.code === 'ECONNREFUSED') {
            console.error('La coneccion a la base de datos fue rechazada');
        }
    }
    if(connection) connection.release();
    console.log('Se a conectado a la Base de datos!!!!');
    return;
});

module.exports = pool;