import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { HeaderComp } from '../Nav/HeaderComp'
import { NavScreen } from '../Nav/NavScreen'

const URI = 'http://localhost:8000/dashboard/editVentas/'

export const EditVentas = () => {
   

    const [order, setOrder] = useState({
    id_facturas:'',
    id_productos:'',
    CU:'',
    Precio:''
    })
    const {id_facturas,id_productos, CU, Precio} = order
    const [loading, setLoading] = useState()
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        getBlogById()
},[])
    const getBlogById = async () =>{
        const res = await axios.get(`${URI}${id}`)
        const {id_facturas,id_productos, CU, Precio} = res.data[0]
        setOrder({
          id_facturas,id_productos, CU, Precio
        })
        setLoading(true)
    }
    const update = async(e) =>{
        e.preventDefault()
        await axios.put(`${URI}${id}`, {
          id_facturas,id_productos, CU, Precio
        })
        navigate('/home/ventas')
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
                  <label className="form-label">IdFacturas</label>
                  <input
                  value={id_facturas}
                  name='id_facturas'
                  onChange={handleChange}
                  type='text'
                  className="form-control"
                  />
                  </div>
                  <div className="mb-3 m-2">
                  <label className="form-label">idProductos</label>
                  <input
                  onChange={handleChange}
                  value={id_productos}
                  name='id_productos'
                  type='text'
                  className="form-control"
                  />
                  </div>
                  <div className="mb-3 m-2">
                  <label className="form-label">C/U</label>
                  <input
                    value={CU}
                    onChange={handleChange}
                    name='CU'
                  type='text'
                  className="form-control"
                  />
                  </div>
                  <div className="mb-3 m-2">
                  <label className="form-label">Precio</label>
                  <input
                    value={Precio}
                    onChange={handleChange}
                    name='Precio'
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
