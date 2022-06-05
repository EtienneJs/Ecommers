import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { HeaderComp } from '../Nav/HeaderComp'
import { NavScreen } from '../Nav/NavScreen'

const URI = 'http://localhost:8000/dashboard/editOrders/'

export const EditOrders = () => {
   

    const [order, setOrder] = useState({
      nombreUser:'',
      apellidoUser:'',
      nombreProductsShops:'',
      total:'',
      updatedAt:''
    })
    const {nombreUser,apellidoUser,nombreProductsShops,total,updatedAt} = order
    const [loading, setLoading] = useState()
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        getBlogById()
},[])
    const getBlogById = async () =>{
        const res = await axios.get(`${URI}${id}`)
        const {nombreUser, apellidoUser, nombreProductsShops, total, updatedAt} = res.date[0]
        setOrder({
          nombreUser,
          apellidoUser,
          nombreProductsShops,
          total,
          updatedAt
        })
        setLoading(true)
    }
    const update = async(e) =>{
        e.preventDefault()
        await axios.put(`${URI}${id}`, {
             nombreUser,
             apellidoUser,
             nombreProductsShops,
             total,
             updatedAt
        })
        navigate('/home/order')
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
                  <label className="form-label">Name</label>
                  <input
                  value={nombreUser}
                  name='nombreUser'
                  onChange={handleChange}
                  type='text'
                  className="form-control"
                  />
                  </div>
                  <div className="mb-3 m-2">
                  <label className="form-label">Apellido</label>
                  <input
                  onChange={handleChange}
                  value={apellidoUser}
                  name='apellidoUser'
                  type='text'
                  className="form-control"
                  />
                  </div>
                  <div className="mb-3 m-2">
                  <label className="form-label">Productos</label>
                  <input
                    value={nombreProductsShops}
                    onChange={handleChange}
                    name='nombreProductsShops'
                  type='text'
                  className="form-control"
                  />
                  </div>
                  <div className="mb-3 m-2">
                  <label className="form-label">total</label>
                  <input
                  onChange={handleChange}
                  value={total}
                  name='total'
                  type='number'
                  className="form-control"
                  />
                  </div>
                  <div className="mb-3 m-2">
                  <label className="form-label">updatedAt</label>
                  <input
                  onChange={handleChange}
                  value={updatedAt}
                  name='total'
                  type='date'
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
