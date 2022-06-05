import Swal from 'sweetalert2'
import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../auth/styleAuth.css'

const URI ='http://localhost:8000/users/'

export const RegisterScreen = () => {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const register = async(e) =>{
        e.preventDefault()

        const registerUser = await axios.post(`${URI}/register`, {name,password, mail})
        console.log(registerUser.data[0].message)

        if(registerUser.data[0].message === 'Ususario ya existente')
        {
            Swal.fire({
                title: ` Error`,
                text: `${registerUser.data[0].message}`,
                icon:'error'
     
              })
        } else {
            Swal.fire({
                text: `Usuario creado correctament`,
                icon:'success'
     
              })
              navigate('/login')
        }

        

    }

  return (
    <div className='d-flex justify-content-center align-items-center container-class '>
        <form onSubmit={register}>
        <h2 className='title'>Register</h2>
        <div className="mb-3 d-flex justify-contennt-center align-items-center flex-column ">
              <label className="form-label">User</label>
              <input
              name='name'
              type='text'
              className="input-class "
              value={name}
              required
              onChange={(e)=>setName(e.target.value)}
              />
              </div>
              <div className="mb-3 d-flex justify-contennt-center align-items-center flex-column ">
              <label className="form-label">Mail</label>
              <input
              name='mail'
              type='mail'
              className="input-class "
              value={mail}
              required
              onChange={(e)=>setMail(e.target.value)}
              />
              </div>
              <div className="mb-3 d-flex justify-contennt-center align-items-center flex-column ">
              <label className="form-label">Password</label>
              <input
              name='password'
              type='password'
              className="input-class"
              value={password}
              required
              onChange={(e)=>setPassword(e.target.value)}
              />
          </div>
          <button className="btn btn-outline-primary">Sigin</button>
        </form>
    </div>
  )
}