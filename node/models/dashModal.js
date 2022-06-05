import { DataTypes } from "sequelize";
import { db } from "../database/db.js";


export const productDashModel = db.define('products',{
    nameProduct: {type:DataTypes.STRING},
    categProduct: {type:DataTypes.STRING},
    stockProduct:{type:DataTypes.NUMBER},
    priceProduct:{type:DataTypes.NUMBER},
    tallaProduct:{type:DataTypes.STRING}
})

export const userModelModal = db.define('modelUsers', {
    name: {type:DataTypes.STRING},
    password: {type:DataTypes.STRING},
    mail:{type:DataTypes.STRING},
    cell:{type:DataTypes.STRING} , 
    direction: {type:DataTypes.STRING},
    editProduct:{type:DataTypes.STRING},
    putProduct:{type:DataTypes.STRING},
    editUsers:{type:DataTypes.STRING},
    orderUsers:{type:DataTypes.STRING},
    newAdmin:{type:DataTypes.STRING}
            
})

export const clientModal = db.define('users',{
    name: {type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    mail: {type:DataTypes.STRING}
})

export const orderModel = db.define('orders',{
    nombreUser: {type:DataTypes.STRING},
    apellidoUser: {type:DataTypes.STRING},
    nombreProductsShops: {type:DataTypes.STRING},
    total: {type:DataTypes.NUMBER}
})