// conexion a la base de dato 

import {Sequelize} from 'sequelize'

export const db = new Sequelize('node_react_full', 'root','1234',{
    host:'localhost',
    dialect:'mysql'
})
