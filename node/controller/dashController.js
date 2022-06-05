import { clientModal, orderModel, productDashModel, userModelModal} from "../models/dashModal.js"
import bcryptjs from 'bcryptjs'

// *Products*

//Ingresar Productos
export const registerProductsPost = async(req, res)=>{

        try {
            const {nameProduct, categProduct, stockProduct, priceProduct,tallaProduct} ={
                nameProduct: req.body.nameProduct,
                categProduct: req.body.categProduct,
                stockProduct: req.body.stockProduct,
                priceProduct: req.body.priceProduct,
                tallaProduct: req.body.tallaProduct
               } 
               const product = await productDashModel.findAll({
                where:{
                    nameProduct: nameProduct,
                    tallaProduct:tallaProduct
                }
            }) 
        
            if(product.length > 0){
                res.json([{
                    'message': 'producto ya existente'
                }])
            } else {
                await productDashModel.create(
                    {nameProduct,categProduct, stockProduct, priceProduct,tallaProduct  }
                    )
                    res.json([{
                        'message': 'producto creado Correctamente'
                    }])
            }
              
          } catch (error) {
            res.json([{
                'message': error
            }])
          }

}
//Mostrar los productos
export const getproducts = async(req, res)=>{
    const {name ,editProduct } = req.decode
    if(name === 'Admin' || editProduct === 1){
    try {
        const products = await productDashModel.findAll()
        res.json({
            message: 'permitido',
            products
        })
    } catch (error) {
        res.json({message: error.message})
    }
    } else{
        res.json({message: 'no permitido', name})
    }


 
}

//Update Product
export const updateProducts = async(req, res)=>{
    
    try {
        await productDashModel.update(req.body,{
             where: {id: req.params.id}
         })
         res.json({
             'message': 'Registro actualizado Correctamente' 
         })
     } catch (error) {
         res.json({message: error.message})
     }

}

//Get One Product
export const getOneProduct = async (req, res) =>{
    try {
      const product = await productDashModel.findAll({
          where:{
              id:req.params.id
          }
      })
      res.json(product)
    } catch (error) {
      res.json({message: error.message})
    }
}
//Delete  a product
export const deleteAProduct = async(req, res)=>{
    try {
        productDashModel.destroy({
            where:{id:req.params.id}
        })
        res.json({
            'message': 'Registro borrado Correctamente' 
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//* Admins *
//Get All admins 
export const getAllAdmins = async (req, res)=>{
    const {name} = req.decode
    if(name === 'Admin'){
        const Admins = await userModelModal.findAll()
        res.json({
            message: 'permitido',
            Admins
        })
    } else {
        res.json({
            message:'denegado',
            name
        })
        return
    }
}
//get an admin 
export const getOneAdmin = async (req, res) =>{
    try {
      const product = await userModelModal.findAll({
          where:{
              id:req.params.id
          }
      })
      res.json(product)
    } catch (error) {
      res.json({message: error.message})
    }
  }
//Update Admin

export const updateAdmin =  async(req, res)=>{
    
    try {
        await userModelModal.update(req.body,{
             where: {id: req.params.id}
         })
         res.json({
             'message': 'Registro actualizado Correctamente' 
         })
     } catch (error) {
         res.json({message: error.message})
     }

}

//Register an Admin 
export const registerAdmin =async(req, res) =>{
    try {
        const {name, password, mail, cell, direction,editProduct,putProduct,editUsers, orderUsers} ={
            name:req.body.name,
            password:req.body.password,
            mail:req.body.mail,
            cell: req.body.cell,
            direction: req.body.direction,
            editProduct: req.body.editProduct,
            putProduct:req.body.putProduct,
            editUsers: req.body.editUsers,
            orderUsers: req.body.orderUsers
          }
        let passHash = await bcryptjs.hash(password, 8)

        const logUser = await userModelModal.findAll({
            where:{
                name:name
            }
        })
        
        if(logUser.length > 0){
            res.json([{message: 'Usuario ya existente'}])
        } else {
            
        await userModelModal.create(
            {name,password:passHash, mail,cell , direction, editProduct, putProduct,editUsers, orderUsers}
            )
            res.json([{
                'message': 'Usuario creado Correctamente'
            }])
        }
    } catch (error) {
        res.json({message: error.message})
    }
}
//Delete admin
export const deleteAdmin = async(req, res)=>{
    try {
        userModelModal.destroy({
            where:{id:req.params.id}
        })
        res.json({
            'message': 'Registro borrado Correctamente' 
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

// *Orders* 
//All Orders 
export const getAllOrders = async (req, res)=>{
    const {name, orderUsers} = req.decode
    if(name === 'Admin' || orderUsers === 'permitido'){
     try {
         const orders = await orderModel.findAll()
         res.json({
             message: 'permitido',
             orders
         })
     } catch (error) {
         res.json({message: error.message})
     }
    } else{
     res.json({message: 'denegado', name})
     return
    }
    
 }
//Get One Order
export const getOneOrder =  async (req, res) =>{
    try {
      const product = await orderModel.findAll({
          where:{
              id:req.params.id
          }
      })
      res.json(product)
    } catch (error) {
      res.json({message: error.message})
    }
  }
//Update Order
export const updateOrder = async(req, res)=>{
    
    try {
        await orderModel.update(req.body,{
             where: {id: req.params.id}
         })
         res.json({
             'message': 'Registro actualizado Correctamente' 
         })
     } catch (error) {
         res.json({message: error.message})
     }

}
//Delete Order
export const deleteOrder = async(req, res)=>{
    try {
        orderModel.destroy({
            where:{id:req.params.id}
        })
        res.json({
            'message': 'Registro borrado Correctamente' 
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//  * Cliente * 
//Get All Client
export const getAllClient = async(req, res)=>{
    const { name , editUsers } = req.decode

    if(name === 'Admin' || editUsers === 'permitido'){
        try {
            const client = await clientModal.findAll()
            res.json({
                message: 'permitido',
                client
            })
        } catch (error) {
            res.json({message: error.message})
        }
    } else {
        res.json({message: 'no permitido', name})
    }
   
}
//Get a Client 
export const getAClient = async (req, res) =>{

    try {
      const client = await clientModal.findAll({
          where:{
              id:req.params.id
          }
      })

 

      res.json(client)
    } catch (error) {
      res.json({message: error.message})
    }
  }
//Update a client

export const updateClient = async(req, res)=>{
    
    try {
        await clientModal.update(req.body,{
             where: {id: req.params.id}
         })
         res.json({
             'message': 'Registro actualizado Correctamente' 
         })
     } catch (error) {
         res.json({message: error.message})
     }

}
//Delete a client 
export const deleteAClient = async(req, res)=>{
    try {
        clientModal.destroy({
            where:{id:req.params.id}
        })
        res.json({
            'message': 'Registro borrado Correctamente' 
        })
    } catch (error) {
        res.json({message: error.message})
    }
}