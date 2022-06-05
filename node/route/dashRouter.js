import express from 'express'
import jwt from 'jsonwebtoken'
import { editAdmin, editOrder, editProduct, editUsers, login, putProduct } from '../controller/AuthController.js'
import { deleteAClient, deleteAdmin, deleteAProduct, deleteOrder, getAClient, getAllAdmins, getAllClient, getAllOrders, getOneAdmin, getOneOrder, getOneProduct, getproducts, registerAdmin, registerProductsPost, updateAdmin, updateClient, updateOrder, updateProducts } from '../controller/dashController.js'

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

router.get('/editOrder', verify, editOrder)

router.get('/editUsers', verify, editUsers)

router.get('/editAdmins', verify, editAdmin)

router.get('/registerProducts',verify, putProduct)

router.get('/info', verify, (req, res )=>{
    const dataUser = req.decode
    res.json(dataUser)
})

//*Dashboard* 



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

//--Orders
//Get All Orders
router.get('/getOrders', verify, getAllOrders)

//One order
router.get('/editOrders/:id',getOneOrder)

  //update Order
router.put('/editOrders/:id', updateOrder)

//Delete a order
router.delete('/order/:id', deleteOrder)


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

