import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { HeaderComp } from '../Nav/HeaderComp'
import { NavScreen } from '../Nav/NavScreen'

const URI = 'http://localhost:8000/dashboard/editprovedores/'

export const EditProvedores = () => {
   

    const [order, setOrder] = useState({
     nombre:'',
     direccion:'',
     telefono:''
    })
    const {nombre, direccion, telefono} = order
    const [loading, setLoading] = useState()
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        getBlogById()
},[])
    const getBlogById = async () =>{
        const res = await axios.get(`${URI}${id}`)
        const {nombre, direccion, telefono} = res.data[0]
        setOrder({
         nombre, 
         direccion,
         telefono
        })
        setLoading(true)
    }
    const update = async(e) =>{
        e.preventDefault()
        await axios.put(`${URI}${id}`, {
             nombre,
             direccion,
             telefono
        })
        navigate('/home/provedores')
    }
    
    const handleChange = (e) =>{
      setOrder({
          ...order,
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
          {
              loading &&
              <form onSubmit={update}  className='w-100' >
              <div className='d-flex flex-wrap justify-content-center align-items-center'>
              <div className="mb-3 m-2">
                  <label className="form-label">Nombre</label>
                  <input
                  value={nombre}
                  name='nombre'
                  onChange={handleChange}
                  type='text'
                  className="form-control"
                  />
                  </div>
                  <div className="mb-3 m-2">
                  <label className="form-label">Direccion</label>
                  <input
                  onChange={handleChange}
                  value={direccion}
                  name='direccion'
                  type='text'
                  className="form-control"
                  />
                  </div>
                  <div className="mb-3 m-2">
                  <label className="form-label">Productos</label>
                  <input
                    value={telefono}
                    onChange={handleChange}
                    name='telefono'
                  type='text'
                  className="form-control"
                  />
                  </div>
                  
                  
              </div>
    
              <button className="btn btn-outline-primary">Save</button>
          </form>
          }
          </div> 
        </main>
      </div>
    </div>
        </div>
  )
}
