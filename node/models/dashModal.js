import { DataTypes } from "sequelize";
import { db } from "../database/db.js";


export const productDashModel = db.define('productos',{
    descripcion: {type:DataTypes.STRING},
    precio: {type:DataTypes.STRING},
    talla: {type:DataTypes.STRING},
    stock:{type:DataTypes.NUMBER},
    id_categorias:{type:DataTypes.NUMBER},
    id_proveedor:{type:DataTypes.NUMBER},
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
    proveedoresEdit:{type:DataTypes.STRING},
    proveedoresPut:{type:DataTypes.STRING},
    editVentas:{type:DataTypes.STRING},
    putVentas:{type:DataTypes.STRING},
    
            
})

export const clientModal = db.define('users',{
    name: {type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    direccion:{type:DataTypes.STRING},
    telefono:{type:DataTypes.STRING},
    mail: {type:DataTypes.STRING}
})
export const facturasModal = db.define('users',{
    idUsers : {type:DataTypes.NUMBER}
})
export const categoriasModal = db.define('categorias',{
    descripcion : {type:DataTypes.NUMBER}
})

export const ventasModal = db.define('ventas',{
    id_facturas : {type:DataTypes.NUMBER},
    id_productos : {type:DataTypes.NUMBER},
    CU: {type:DataTypes.STRING},
    Precio: {type:DataTypes.NUMBER},
})

