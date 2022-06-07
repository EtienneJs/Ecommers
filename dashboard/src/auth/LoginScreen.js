import React, { useContext } from 'react'
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../auth/styleAuth.css'
import Swal from 'sweetalert2'
import { AuthContext } from './context/AuthContext';
import { TYPES } from './types/TYPES';



const URI ='http://localhost:8000/dashboard/'

export const LoginScreen = () => {
    const {dispach} = useContext(AuthContext)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    

    const login = async(e) =>{
        e.preventDefault()
       const loginUser = await axios.post(`${URI}loginDash`, {name, password})
       if(loginUser.data.message === 'user/pass invalid'){
         
         Swal.fire({
           title: ` Error`,
           text: `${loginUser.data.message}`,
           icon:'error'

         })
       } else {
         Swal.fire({
          title: ` ${loginUser.data.message}`,
          icon:'success'
        })

        const token = loginUser.data.token
        const info = await axios.get(`${URI}info`,  {
          headers:{"Authorization": `Bearer ${token}` }
        })
        const { name, editProduct, putProduct, editUsers,editVentas, putVentas, proveedoresEdit,proveedoresPut } = info.data
          const action = {
            type: TYPES.login,
            payload:{UserCheck: true ,name, editProduct ,putProduct, editUsers, editVentas, token,putVentas, proveedoresEdit,proveedoresPut}
          }
         
          dispach(action)
          navigate('/home')
       }
      

    }
  return (
    <div className='d-flex justify-content-center align-items-center container-class '>
        <form onSubmit={login}>
        <h2 className='title'>LogIn</h2>
        <div className="mb-3 d-flex justify-contennt-center align-items-center flex-column ">
              <label className="form-label">User</label>
              <input
              name='name'
              type='text'
              className="input-class"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              />
              </div>
              <div className="mb-3 d-flex justify-contennt-center align-items-center flex-column ">
              <label className="form-label">Password</label>
              <input
              name='password'
              type='password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="input-class "
              />
          </div>
          <button className="btn btn-outline-primary">Login</button>
        <Link to='/register' className='btn btn-warning'>Registrarse</Link>
        </form>
    </div>
  )
}
