import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { HeaderComp } from '../Nav/HeaderComp'
import { NavScreen } from '../Nav/NavScreen'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'
import { TYPES } from '../../auth/types/TYPES'
const URI ='http://localhost:8000/dashboard/getAdmin'
const URI2 ='http://localhost:8000/dashboard/registerEmpl'

export const NewAdminScreen = () => {
  const {user, dispach} = useContext(AuthContext)
  const [admin, setAdmin] = useState({
    name:'',
    password:'',
    mail:'',
    cell:'',
    direction:'',
    editProduct:'permitido',
    putProduct:'permitido',
    editUsers:'permitido',
    proveedoresEdit:'permitido',
    proveedoresPut:'permitido',
    editVentas:'permitido',
    editFacturas:'permitido',
    editCategorias:'permitido',
    putCategorias:'permitido',
  })
  const { putCategorias,editCategorias,name,password, mail, cell, direction, editProduct, putProduct,editUsers,proveedoresEdit, proveedoresPut,editVentas,editFacturas} = admin
  const token = user.token
  const navigate = useNavigate()
  useEffect(()=>{
    getProduct()
  }, [])
  const getProduct = async () =>{
       const res = await axios.get(URI,  {
         headers:{"Authorization": `Bearer ${token}` }
       })
       const {message, name} = res.data
       if(message === 'permitido'){
       } else {
        const action = {
          type: TYPES.login,
          payload:{...user,name }
        }
        dispach(action)
          navigate('/home')
       }
   }

   const newAdmin = async(e) =>{
    e.preventDefault()
    await axios.post(`${URI2}`, {
      name,
      mail,
      password,
      cell,
      direction,
      editProduct,
      putProduct,
      editUsers,
      proveedoresEdit,
      proveedoresPut,
      editVentas,
      editFacturas,
      editCategorias,
      putCategorias
    },{
      headers:{"Authorization": `Bearer ${token}` }
    })
    Swal.fire({
      title: 'Se ha ingresado un nuevo administrador '
  })
    navigate('/home/allAdmin')
}
const handleChange = (e) =>{
  setAdmin({
      ...admin,
      [e.target.name]:e.target.value
  })
}
  return (
    <div>
<HeaderComp/>
<div className="container-fluid ">
  <div className="row container_Dash">
 <NavScreen/>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex  justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 m-2 ">
      <form  className='w-100' onSubmit={newAdmin}>
          <div className='d-flex flex-wrap justify-content-center align-items-center'>
          <div className="mb-3 m-2">
              <label className="form-label">Name</label>
              <input 
              required         
              value={name} 
              name='name' 
              onChange={handleChange} 
              type='text'
              className="form-control"
              />
              </div>
              <div className="mb-3 m-2">
              <label className="form-label">Password</label>
              <input 
              required
              value={password}
              name='password' 
              onChange={handleChange} 
              type='password'
              className="form-control"
              />
              </div>
              <div className="mb-3 m-2">
              <label className="form-label">mail</label>
              <input 
              required
              onChange={handleChange} 
              value={mail}
              name='mail' 
              type='mail'
              className="form-control"
              />
              </div>
              <div className="mb-3 m-2">
              <label className="form-label">cell</label>
              <input 
              required
              onChange={handleChange} 
              value={cell}
              name='cell' 
              type='text'
              className="form-control"
              />
              </div>
              <div className="mb-3 m-2">
              <label className="form-label">direction</label>
              <input 
              required
              onChange={handleChange} 
              value={direction}
              name='direction' 
              type='text'
              className="form-control"
              />
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label">Editar los productos</label>
              <select name='editProduct' onChange={handleChange}>
                <option value='permitido'>permitido</option>
                <option value='denegado'>denegado</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label">Ingresar los productos</label>
              <select name='putProduct' onChange={handleChange}>
                <option value='permitido'>permitido</option>
                <option value='denegado'>denegado</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label">Editar los Users</label>
              <select name='editUsers' onChange={handleChange}>
                <option value='permitido'>permitido</option>
                <option value='denegado'>denegado</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label">Ordenar Usuarios</label>
              <select name='proveedoresEdit' onChange={handleChange}>
                <option value='permitido'>permitido</option>
                <option value='denegado'>denegado</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label">New Provedores</label>
              <select name='proveedoresPut' onChange={handleChange}>
                <option value='permitido'>permitido</option>
                <option value='denegado'>denegado</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label">Ventas</label>
              <select name='editVentas' onChange={handleChange}>
                <option value='permitido'>permitido</option>
                <option value='denegado'>denegado</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label">Facturas Screen</label>
              <select name='editFacturas' onChange={handleChange}>
                <option value='permitido'>permitido</option>
                <option value='denegado'>denegado</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label">editCategorias</label>
              <select name='editCategorias' onChange={handleChange}>
                <option value='permitido'>permitido</option>
                <option value='denegado'>denegado</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label"> putCategorias</label>
              <select name=' putCategorias' onChange={handleChange}>
                <option value='permitido'>permitido</option>
                <option value='denegado'>denegado</option>
              </select>
              </div>
          </div>

          <button className="btn btn-outline-primary">Save</button>
      </form>
      </div> 
    </main>
  </div>
</div>
    </div>
    
    
  )
}

