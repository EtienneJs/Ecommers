// import db
import { db } from "../database/db.js";
//Tipificamos los contenido de la tabla
import { DataTypes } from "sequelize";


export const BlogModel = db.define('blogs',{
    title:{ type:DataTypes.STRING },
    content:{ type:DataTypes.STRING },
})



