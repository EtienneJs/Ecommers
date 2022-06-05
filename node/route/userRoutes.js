import express from 'express'
import { register } from '../controller/AuthController.js'
import bcryptjs from 'bcryptjs'
import { UserModel } from '../models/authModel.js'
import jwt from 'jsonwebtoken'
const router = express.Router()




router.post('/login',async(req, res)=>{
    try {
        const loginUser={
             name: req.body.name,
             password: req.body.password 
        }
        if(!loginUser.name || !loginUser.password){
            res.json([{'message': 'user/pass invalid'}])
        } 
        else 
        {
           const logUser = await UserModel.findAll({
                where:{
                    name: loginUser.name
                }
            })
            if(logUser.length === 0 || !(await bcryptjs.compare(loginUser.password, logUser[0].password))){
                res.json({'message': 'user/pass invalid'})
            } else {
                    const payload = {
                        check:true,
                        name: logUser[0].name,
                        mail: logUser[0].mail,
                        id:logUser[0].id
                    }
                    const token = jwt.sign(payload, 'superKeySecret',{
                        expiresIn: '7d'
                    })
                    res.json(
                        {
                            message: 'El usuario ingreso correctamente',
                            token
                            
                        }
                    )
            }
        }
    } catch (error) {
        res.json({message: error.message})
    }
    
     
}
)

const verify = express.Router()

verify.use((req, res, next)=>{
    let token = req.header['x-access-token']|| req.headers['authorization']
    if(!token){
        res.status(401).send({
            error: 'es necesario un token de autenticacion'
        })
        return
    }
    if(token.startsWith('Bearer ')){
        token = token.slice(7, token.length )
        console.log(token)
    }
    if(token){
        jwt.verify(token,'superKeySecret',(error, decode)=>{
            if(error){
                return res.json({
                    message:'el Token no es valido'
                })
            } else {
                req.decode = decode
                console.log(decode)
                next()
            }
        } )
    }
})

router.post('/register', register)

router.get('/info', verify ,(req, res)=>{
    res.json(req.decode)
})

export default router