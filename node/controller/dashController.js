import { categoriasModal, clientModal, facturasModal,productDashModel, userModelModal, ventasModal} from "../models/dashModal.js"
import bcryptjs from 'bcryptjs'

// *Ventas*

//Ingresar categoria
export const registerVentas = async(req, res)=>{

    try {
        const {id_facturas,id_productos,CU, Precio} ={
            id_facturas :req.body.id_facturas,
            id_productos :req.body.id_productos,
            CU:req.body.CU,
            Precio:req.body.Precio
           } 
            await productDashModel.create(
                {id_facturas, id_productos,CU,Precio }
                )
                res.json([{
                    'message': 'producto creado Correctamente'
                }])
          
      } catch (error) {
        res.json([{
            'message': error
        }])
      }

}
//Mostrar los categoria
export const getVentas = async(req, res)=>{
const {name ,editProduct } = req.decode
if(name === 'Admin' || editProduct === 'permitido'){
try {
    const categorias = await ventasModal.findAll()
    res.json({
        message: 'permitido',
        categorias
    })
} catch (error) {
    res.json({message: error.message})
}
} else{
    res.json({message: 'no permitido', name})
}



}

//Update categoria
export const updateVentas = async(req, res)=>{

try {
    await ventasModal.update(req.body,{
         where: {id: req.params.id}
     })
     res.json({
         'message': 'Registro actualizado Correctamente' 
     })
 } catch (error) {
     res.json({message: error.message})
 }

}

//Get One categoria
export const getOneVentas = async (req, res) =>{
try {
  const product = await ventasModal.findAll({
      where:{
          id:req.params.id
      }
  })
  res.json(product)
} catch (error) {
  res.json({message: error.message})
}
}
//Delete  a categoria
export const deleteAVentas = async(req, res)=>{
try {
    ventasModal.destroy({
        where:{id:req.params.id}
    })
    res.json({
        'message': 'Registro borrado Correctamente' 
    })
} catch (error) {
    res.json({message: error.message})
}
}
// *Categorias*

//Ingresar categoria
export const registerCategorias = async(req, res)=>{

    try {
        const {} ={
            descripcion: req.body.descripcion
           } 
           const product = await categoriasModal.findAll({
            where:{
                descripcion
            }
        }) 
    
        if(product.length > 0){
            res.json([{
                'message': 'producto ya existente'
            }])
        } else {
            await productDashModel.create(
                {descripcion }
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
//Mostrar los categoria
export const getCategorias = async(req, res)=>{
const {name ,editProduct } = req.decode
if(name === 'Admin' || editProduct === 'permitido'){
try {
    const categorias = await categoriasModal.findAll()
    res.json({
        message: 'permitido',
        categorias
    })
} catch (error) {
    res.json({message: error.message})
}
} else{
    res.json({message: 'no permitido', name})
}



}

//Update categoria
export const updateCategorias = async(req, res)=>{

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

//Get One categoria
export const getOneCategorias = async (req, res) =>{
try {
  const product = await categoriasModal.findAll({
      where:{
          id:req.params.id
      }
  })
  res.json(product)
} catch (error) {
  res.json({message: error.message})
}
}
//Delete  a categoria
export const deleteACategorias = async(req, res)=>{
try {
    categoriasModal.destroy({
        where:{id:req.params.id}
    })
    res.json({
        'message': 'Registro borrado Correctamente' 
    })
} catch (error) {
    res.json({message: error.message})
}
}
// *Facturas*

//Ingresar categoria
export const registerFactura = async(req, res)=>{

    try {
        const {} ={
            idUsers: req.body.idUsers
           } 
           const product = await facturasModal.findAll({
            where:{
                id
            }
        }) 
    
        if(product.length > 0){
            res.json([{
                'message': 'producto ya existente'
            }])
        } else {
            await productDashModel.create(
                {descripcion }
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
//Mostrar los categoria
export const getFacturas = async(req, res)=>{
const {name ,editProduct } = req.decode
if(name === 'Admin' || editProduct === 'permitido'){
try {
    const categorias = await facturasModal.findAll()
    res.json({
        message: 'permitido',
        categorias
    })
} catch (error) {
    res.json({message: error.message})
}
} else{
    res.json({message: 'no permitido', name})
}



}

//Update categoria
export const updateFacturas = async(req, res)=>{

try {
    await facturasModal.update(req.body,{
         where: {id: req.params.id}
     })
     res.json({
         'message': 'Registro actualizado Correctamente' 
     })
 } catch (error) {
     res.json({message: error.message})
 }

}

//Get One categoria
export const getOneFacturas = async (req, res) =>{
try {
  const product = await facturasModal.findAll({
      where:{
          id:req.params.id
      }
  })
  res.json(product)
} catch (error) {
  res.json({message: error.message})
}
}
//Delete  a categoria
export const deleteAFactura = async(req, res)=>{
try {
    facturasModal.destroy({
        where:{id:req.params.id}
    })
    res.json({
        'message': 'Registro borrado Correctamente' 
    })
} catch (error) {
    res.json({message: error.message})
}
}
// *Products*

//Ingresar Productos
export const registerProductsPost = async(req, res)=>{

        try {
            const {descripcion, precio,talla,stock, id_categorias, id_proveedor} ={
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                stock: req.body.stock,
                talla: req.body.talla,
                id_categorias: req.body.id_categorias,
                id_proveedor: req.body.id_proveedor
               } 
               const product = await productDashModel.findAll({
                where:{
                    descripcion,
                    talla
                }
            }) 
        
            if(product.length > 0){
                res.json([{
                    'message': 'producto ya existente'
                }])
            } else {
                await productDashModel.create(
                    {descripcion, precio,talla,stock, id_categorias, id_proveedor }
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
    if(name === 'Admin' || editProduct === 'permitido'){
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