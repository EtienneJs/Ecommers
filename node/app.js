import express from 'express'
import cors from 'cors'
import { db } from './database/db.js'
import router from './route/routes.js'
import userRouter from './route/userRoutes.js'
import dashRouter from './route/dashRouter.js'
const app = express()
//middlewares
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())
app.use('/blogs', router)
app.use('/users', userRouter)
app.use('/dashboard', dashRouter)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la base de datos')
} catch (error) {
    console.log(`Conexion fallida a la base de datos, error es: ${error}`)
}


app.listen(8000, ()=>{
    console.log('El servidor esta up en http://localhost:8000')
})



