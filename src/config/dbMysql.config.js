import mysql from 'mysql2/promise'
import ENVIROMENT from './enviroment.js'

const pool = mysql.createPool(
    {
        host: ENVIROMENT.MYSQL.HOST,
        user: ENVIROMENT.MYSQL.USERNAME, 
        password: ENVIROMENT.MYSQL.PASSWORD,
        database: ENVIROMENT.MYSQL.DATABASE
    }
)

pool.getConnection().then(
    (connection) => {
        console.log('Conexion con mysql exitosa')
        connection.release()
    }
)
.catch(
    (err) =>{
        console.error('Error en conexion con MySQL:', err)
    }
)


export default pool