import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Admins/styleAuth.css'
import axios from 'axios'
import { getAdmin } from './getAdmins'
import { AuthContext } from '../../auth/context/AuthContext'
import { TYPES } from '../../auth/types/TYPES'
import { HeaderComp } from '../Nav/HeaderComp'
import { NavScreen } from '../Nav/NavScreen'
const URI ='http://localhost:8000/dashboard/getAdmin'
const URI2 ='http://localhost:8000/dashboard/admin/'




export const AllAdmin = () => {
  const {user, dispach} = useContext(AuthContext)
  const token = user.token
  const navigate = useNavigate()
  const [productName, setProductName] = useState('')
  const [filter, setFilter] = useState('name')
  const [admin, setAdmin] = useState([])
  useEffect(()=>{
    getProduct()
  }, [])
  const getProduct = async () =>{
       const res = await axios.get(URI,  {
         headers:{"Authorization": `Bearer ${token}` }
       })
       const {message, Admins, name} = res.data
       if(message === 'permitido'){

         setAdmin(Admins)
       } else {
        const action = {
          type: TYPES.login,
          payload:{...user,name }
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
    const promesa1 = Promise.resolve( getAdmin(filter,productName,user.token))
    promesa1.then((value)=>{
      setAdmin(value)
    })
  }
  const handleOnchangeFilter = (e) =>{
    setFilter(e.target.value)
    getAdmin(filter,productName,user.token)
  
  }
  return (
    <div>
    <HeaderComp/>
    <div className="container-fluid ">
      <div className="row container_Dash">
     <NavScreen/>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex flex-column justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <div className='d-flex flex-column'>
      <input type='text' onChange={handleSearch}/>
      <select onChange={handleOnchangeFilter} className='mb-3'>
        <option value='name'>Nombre</option>
        <option value='mail'>Gmail</option>
        <option value='cell'>Phone</option>
        <option value='direction'>direction</option>
        <option value='editProduct'>editProduct</option>
        <option value='editUsers'>editUsers</option>
        <option value='orderUsers'>orderUsers</option>

      </select>
      </div>
           <table className='table text-white '>
           <thead className='table-primary'>
               <tr>
                   <th>Nombre</th>
                   <th>Mail</th>
                   <th>Cell</th>
                   <th>Direction</th>
                   <th>Product</th>
                   <th>Users</th>
                   <th>Order</th>
                   <th>Actions</th>
               </tr>
           </thead>
           <tbody>
               {
                 
                   admin.map((product)=>(
                       <tr key={product.id}> 
                           <td>{product.name}</td>
                           <td>{product.mail}</td>
                           <td>{product.cell}</td>
                           <td>{product.direction}</td>
                           <td>{product.editProduct}</td>
                           <td>{product.editUsers}</td>
                           <td>{product.orderUsers}</td>
                           
                           <td>
                               <Link to={`/home/editAdmin/${product.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
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
    
    
  )
}
