import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import '../styles/dashStyle.css'
import { HeaderComp } from './Nav/HeaderComp'

import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'
import { TYPES } from '../auth/types/TYPES'
import { NavScreen } from './Nav/NavScreen'
const URIO ='http://localhost:8000/dashboard/getOrders'
const URI ='http://localhost:8000/dashboard/getClient'
const URIP ='http://localhost:8000/dashboard/getProducts'



export const HomeScreen = () => {
  const {user, dispach} = useContext(AuthContext)
  const token = user.token

  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [order, setOrder] = useState([])
  const [product, setProduct] = useState([])

  return (
    <div>
<HeaderComp/>
<div className="container-fluid ">
  <div className="row container_Dash">
 <NavScreen/>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className=" flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
      <h1> HomeScreen </h1>


    <div className='d-flex'>
    <div className="card me-3" >
  <div className="card-body">
    <h5 className="card-title text-black">Total de usuarios</h5>
    <p className="card-text text-black fs-1 ">{users.length}</p>
  </div>
</div>
<div className="card me-3" >
  <div className="card-body">
    <h5 className="card-title text-black">Total de productos</h5>
    <p className="card-text text-black fs-1 ">{product.length}</p>
  </div>
</div>
<div className="card me-3" >
  <div className="card-body">
    <h5 className="card-title text-black">Compras Realizadas</h5>
    <p className="card-text text-black fs-1 ">{order.length}</p>
  </div>
</div>
    </div>

      </div> 
    </main>
  </div>
</div>
    </div>
    
    
  )
}
