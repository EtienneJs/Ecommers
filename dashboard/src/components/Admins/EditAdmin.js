import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { HeaderComp } from '../Nav/HeaderComp'
import { NavScreen } from '../Nav/NavScreen'
const URI = 'http://localhost:8000/dashboard/editAdmin/'

export const EditAdmin = () => {
    const [admin, setAdmin] = useState({
      name:'',
      password:'',
      mail:'',
      cell:'',
      direction:'',
      editProduct:'permitido',
      putProduct:'permitido',
      editUsers:'permitido',
      orderUsers:'permitido'
    })
    const {name, mail, cell, direction, editProduct, putProduct,editUsers,orderUsers} = admin
    const {id} = useParams()
    const navigate = useNavigate()

    const update = async(e) =>{
        e.preventDefault()
        await axios.put(`${URI}${id}`, {
            name,
            mail,
            cell,
            direction,
            editProduct,
            putProduct,
            editUsers,
            orderUsers
        })
        navigate('/home/allAdmin')
    }

    useEffect(()=>{
        getBlogById()
},[])

    const getBlogById = async () =>{
        const res = await axios.get(URI+id)
        const {name, mail,cell,direction,editProduct,putProduct,editUsers,orderUsers} = res.data[0]
       setAdmin({
        name,
        mail,
        cell,
        direction,
        editProduct,
        putProduct,
        editUsers,
        orderUsers
       })
    }
    const handleChange = (e) =>{
      setAdmin({
          ...admin,
          [e.target.name]:e.target.value
      })
  }
  console.log(admin)
  return (
    <div>
    <HeaderComp/>
    <div className="container-fluid ">
      <div className="row container_Dash">
     <NavScreen/>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex  justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 m-2 ">
          <form  className='w-100' onSubmit={update}>
              <div className='d-flex flex-wrap justify-content-center align-items-center'>
              <div className="mb-3 m-2">
                  <label className="form-label">Name</label>
                  <input            
                  value={name} 
                  name='name' 
                  onChange={handleChange} 
                  type='text'
                  className="form-control"
                  />
                  </div>
                  <div className="mb-3 m-2">
                  <label className="form-label">mail</label>
                  <input
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
                  <div  className="mb-3 m-2 d-flex flex-column">
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
                  <select name='orderUsers' onChange={handleChange}>
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