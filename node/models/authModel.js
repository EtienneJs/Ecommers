import { DataTypes } from "sequelize";
import { db } from "../database/db.js";


export const UserModel = db.define('users',{
    name: {type:DataTypes.STRING},
    password: {type:DataTypes.STRING},
    mail:{type:DataTypes.STRING}
})