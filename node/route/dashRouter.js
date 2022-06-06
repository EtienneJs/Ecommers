import express from 'express'
import jwt from 'jsonwebtoken'
import { editAdmin,editProduct, editUsers, editVentas, login, proveedoresEdit, proveedoresPut, putProduct, putVentas } from '../controller/AuthController.js'
import { deleteACategorias,
     deleteAClient,
      deleteAdmin, deleteAFactura, deleteAProduct, deleteAVentas, getAClient, getAllAdmins, getAllClient, 
      getCategorias, getFacturas, getOneAdmin, getOneCategorias, getOneFacturas, 
      getOneProduct, getOneVentas, getproducts, getVentas, registerAdmin, registerCategorias, 
      registerFactura, registerProductsPost, registerVentas, updateAdmin, updateCategorias, updateClient, updateFacturas, 
       updateProducts, updateVentas } from '../controller/dashController.js'

const router = express.Router()
export const verify = express.Router()

//midleWare
verify.use((req, res, next)=>{
    let token = req.header['x-access-token'] || req.headers['authorization']

    if(!token){
        res.status(401).send({
            error: 'es necesario un token de autenticacion'
        })
        return
    }
    if(token.startsWith('Bearer ')){
        token = token.slice(7, token.length )
        
    }
    if(token){
        jwt.verify(token,'superKeySecret',(error, decode)=>{
            if(error){
                return res.json({
                    message:'el Token no es valido'
                })
            } else {
                req.decode = decode
                next()
            }
        } )
    }
})

//* Auth * 
router.post('/loginDash',login)

router.get('/editProduct', verify,editProduct )

router.get('/editVentas', verify, editVentas)

router.get('/putVentas', verify, putVentas)

router.get('/proveedoresEdit', verify, proveedoresEdit)

router.get('/proveedoresPut', verify, proveedoresPut)

router.get('/editUsers', verify, editUsers)

router.get('/editAdmins', verify, editAdmin)

router.get('/registerProducts',verify, putProduct)

router.get('/info', verify, (req, res )=>{
    const dataUser = req.decode
    res.json(dataUser)
})

//*Dashboard* 
//--Ventas

//Get All Products 
router.get('/getVentas', verify, getVentas)

//One Product
router.get('/editVentas/:id', getOneVentas)

//Register Product
router.post('/registerVentas', registerVentas)

//update Product
router.put('/editVentas/:id', updateVentas)

//Delete a product
router.delete('/Ventas/:id', deleteAVentas)

//--facturas

//Get All Products 
router.get('/getFacturas', verify, getFacturas)

//One Product
router.get('/editFacturas/:id', getOneFacturas)

//Register Product
router.post('/registerFacturas', registerFactura)

//update Product
router.put('/editFacturas/:id', updateFacturas)

//Delete a product
router.delete('/Factura/:id', deleteAFactura)


//--Products

//Get All Products 
router.get('/getProducts', verify, getproducts)

//One Product
router.get('/edit/:id', getOneProduct)

//Register Product
router.post('/registerProducts', registerProductsPost)

//update Product
router.put('/edit/:id', updateProducts)

//Delete a product
router.delete('/:id', deleteAProduct)

//--categoria

//Get All Products 
router.get('/getCategorias', verify, getCategorias)

//One Product
router.get('/editCategorias/:id', getOneCategorias)

//Register Product
router.post('/registerCategorias', registerCategorias)

//update Product
router.put('/editCategorias/:id', updateCategorias)

//Delete a product
router.delete('/categorias/:id', deleteACategorias)


//--Client
//All Client
router.get('/getClient', verify, getAllClient)

//Get One Client
router.get('/client/:id', getAClient)

//Update Client
router.put('/client/:id', updateClient)

//Delete a Client
router.delete('/client/:id', deleteAClient)


//--Admin
//Get admins
router.get('/getAdmin', verify, getAllAdmins)

//Get One Admin
router.get('/editAdmin/:id', getOneAdmin)

//Register Admin 
router.post('/registerEmpl', verify, registerAdmin)

//Update Admin 
router.put('/editAdmin/:id', updateAdmin)

//Delete a Admin
router.delete('/admin/:id', deleteAdmin)

























  

export default router

