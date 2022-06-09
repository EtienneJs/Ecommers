import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { HeaderComp } from '../Nav/HeaderComp'
import { NavScreen } from '../Nav/NavScreen'
const URI = 'http://localhost:8000/dashboard/editAdmin/'

export const EditAdmin = () => {
  const [data, setData] = useState({
    name:'',
    password:'',
    mail:'',
    cell:'',
    direction:'',
    editProduct:'',
    putProduct:'',
    editUsers:'',
    proveedoresEdit:'',
    proveedoresPut:'',
    editVentas:'',
    editFacturas:'',
    editCategorias:'',
    putCategorias:'',
    loadingdata:false
  })
    const [admin, setAdmin] = useState({
      name:'',
      password:'',
      mail:'',
      cell:'',
      direction:'',
      editProduct:'',
      putProduct:'',
      editUsers:'',
      proveedoresEdit:'',
      proveedoresPut:'',
      editVentas:'',
      editFacturas:'',
      editCategorias:'',
      putCategorias:'',
    })
    
    const {putCategorias,editCategorias,name,password, mail, cell, direction, editProduct, putProduct,editUsers,proveedoresEdit, proveedoresPut,editVentas,editFacturas} = admin
    const {id} = useParams()
    const navigate = useNavigate()

    const update = async(e) =>{
        e.preventDefault()
        await axios.put(`${URI}${id}`, {
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
        })
        navigate('/home/allAdmin')
    }

    useEffect(()=>{
     
        getBlogById()
},[])


    const getBlogById = async () =>{
        const res = await axios.get(URI+id)
        const {name, mail,cell,direction,editProduct,putProduct,editUsers,proveedoresEdit,
          proveedoresPut,
          editVentas,
          editFacturas,
          editCategorias,
          putCategorias} = res.data[0]
       setData({
        name,
        mail,
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
      putCategorias,
       })
       setAdmin({
        name,
        mail,
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
      putCategorias,
       })
  
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
          <form  className='w-100' onSubmit={update}>
          
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
                <option value={data.editProduct === 'permitido' ? 'permitido':'denegado'}>{data.editProduct === 'permitido' ? 'permitido':'denegado'}</option>
                <option value={data.editProduct === 'permitido' ? 'denegado':'permitido'}>{data.editProduct === 'permitido' ? 'denegado':'permitido'}</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label">Ingresar los productos</label>
              <select name='putProduct' onChange={handleChange}>
              <option value={data.putProduct === 'permitido' ? 'permitido':'denegado'}>{data.putProduct === 'permitido' ? 'permitido':'denegado'}</option>
                <option value={data.putProduct === 'permitido' ? 'denegado':'permitido'}>{data.putProduct === 'permitido' ? 'denegado':'permitido'}</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label">Editar los Users</label>
              <select name='editUsers' onChange={handleChange}>
              <option value={data.editUsers === 'permitido' ? 'permitido':'denegado'}>{data.editUsers === 'permitido' ? 'permitido':'denegado'}</option>
                <option value={data.editUsers === 'permitido' ? 'denegado':'permitido'}>{data.editUsers === 'permitido' ? 'denegado':'permitido'}</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label">Ordenar Provedores</label>
              <select name='proveedoresEdit' onChange={handleChange}>
              <option value={data.proveedoresEdit === 'permitido' ? 'permitido':'denegado'}>{data.proveedoresEdit === 'permitido' ? 'permitido':'denegado'}</option>
                <option value={data.proveedoresEdit === 'permitido' ? 'denegado':'permitido'}>{data.proveedoresEdit === 'permitido' ? 'denegado':'permitido'}</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label">New Provedores</label>
              <select name='proveedoresPut' onChange={handleChange}>
              <option value={data.proveedoresPut === 'permitido' ? 'permitido':'denegado'}>{data.proveedoresPut === 'permitido' ? 'permitido':'denegado'}</option>
                <option value={data.proveedoresPut === 'permitido' ? 'denegado':'permitido'}>{data.proveedoresPut === 'permitido' ? 'denegado':'permitido'}</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label">Ventas</label>
              <select name='editVentas' onChange={handleChange}>
              <option value={data.editVentas === 'permitido' ? 'permitido':'denegado'}>{data.editVentas === 'permitido' ? 'permitido':'denegado'}</option>
                <option value={data.editVentas === 'permitido' ? 'denegado':'permitido'}>{data.editVentas === 'permitido' ? 'denegado':'permitido'}</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label">Facturas Screen</label>
              <select name='editFacturas' onChange={handleChange}>
              <option value={data.editFacturas === 'permitido' ? 'permitido':'denegado'}>{data.editFacturas === 'permitido' ? 'permitido':'denegado'}</option>
                <option value={data.editFacturas === 'permitido' ? 'denegado':'permitido'}>{data.editFacturas === 'permitido' ? 'denegado':'permitido'}</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label">editCategorias</label>
              <select name='editCategorias' onChange={handleChange}>
              <option value={data.editCategorias === 'permitido' ? 'permitido':'denegado'}>{data.editCategorias === 'permitido' ? 'permitido':'denegado'}</option>
                <option value={data.editCategorias === 'permitido' ? 'denegado':'permitido'}>{data.editCategorias === 'permitido' ? 'denegado':'permitido'}</option>
              </select>
              </div>
              <div className="mb-3 m-2 d-flex flex-column">
              <label className="form-label"> putCategorias</label>
              <select name=' putCategorias' onChange={handleChange}>
              <option value={data.putCategorias === 'permitido' ? 'permitido':'denegado'}>{data.putCategorias === 'permitido' ? 'permitido':'denegado'}</option>
                <option value={data.putCategorias === 'permitido' ? 'denegado':'permitido'}>{data.putCategorias === 'permitido' ? 'denegado':'permitido'}</option>
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