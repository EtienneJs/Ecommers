import React, { useContext, useEffect, useState } from 'react'
import { HeaderComp } from '../Nav/HeaderComp'
import { NavScreen } from '../Nav/NavScreen'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getClient } from './getClient'
import { AuthContext } from '../../auth/context/AuthContext'
import { TYPES } from '../../auth/types/TYPES'
const URI ='http://localhost:8000/dashboard/getClient'
const URI2 ='http://localhost:8000/dashboard/client/'

export const AllUsers = () => {
  const {user, dispach} = useContext(AuthContext)
  const navigate = useNavigate()
  const [productName, setProductName] = useState('')
  const [filter, setFilter] = useState('name')
  const [product, setProduct] = useState([])
  const token = user.token


  useEffect(()=>{
    getProduct()
  }, [])

  const getProduct = async () =>{
    const res = await axios.get(URI,  {
      headers:{"Authorization": `Bearer ${token}` }
    })
    const {name, message, client} = res.data 
  if(message === 'permitido'){
    setProduct(client)
  } else {
    const action = {
      type: TYPES.login,
      payload:{...user,editUsers:'denegado',name }
    }
    dispach(action)
    navigate('/home')
  }
}

const delProduct = async(id)=>{
  await axios.delete(`${URI2}${id}`)
  getProduct()
}
const handleSearch = (e) =>{
  e.preventDefault()
  setProductName(e.target.value)
  const promesa1 = Promise.resolve( getClient(filter , productName,user.token))

  promesa1.then((value)=>{
    setProduct(value)
  })
}
const handleOnchangeFilter = (e) =>{
  setFilter(e.target.value)
}
  return (
   
    <>
      <div>
<HeaderComp/>
<div className="container-fluid ">
  <div className="row container_Dash">
 <NavScreen/>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex flex-column justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
      <h1> Cliente Screen </h1>
      <div className='d-flex flex-column'>
      <input onChange={handleSearch}/>
      <select onChange={handleOnchangeFilter} className='mb-3'>
        <option value='name'>Nombre</option>
        <option value='mail'>Gmail</option>
      </select>
      </div>
       <table className='table text-white '>
       <thead className='table-primary'>
           <tr>
               <th>Nombre</th>
               <th>Mail</th>
               <th>Action</th>

           </tr>
       </thead>
       <tbody>
           {
             
               product.map((product)=>(
                   <tr key={product.id}> 
                       <td>{product.name}</td>
                       <td>{product.mail}</td>
                       <td>
                           <Link to={`/home/editClient/${product.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                           <button onClick={()=> delProduct(product.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                       </td>
                   </tr>
               ))
           }
       </tbody>
   </table>
       
      </div> 
    </main>
  </div>
</div>
    </div>
    </>
  )
}
