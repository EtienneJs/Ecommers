import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Admins/styleAuth.css'
import axios from 'axios'
import { getAdmin } from './getAdmins'
import { AuthContext } from '../../auth/context/AuthContext'
import { TYPES } from '../../auth/types/TYPES'
import { HeaderComp } from '../Nav/HeaderComp'
import { NavScreen } from '../Nav/NavScreen'
import { SearchScreen } from './SearchScreen'
const URI ='http://localhost:8000/dashboard/getAdmin'
const URI2 ='http://localhost:8000/dashboard/admin/'




export const AllAdmin = () => {
  const {user, dispach} = useContext(AuthContext)
  const token = user.token
  const navigate = useNavigate()
  const [productName, setProductName] = useState(0)
  const [filter, setFilter] = useState('name')
  const [admin, setAdmin] = useState([])
  const [search, setSearch] = useState(null)
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
 
  const handleOnchangeFilter = (e) =>{
    setFilter(e.target.value)
    getAdmin(filter,productName,user.token)
  }
  const handleSearch = () =>{
    setSearch(true)
  }
  const handleCancel =() =>{
    setSearch(null)
  }
  return (
    <div>
    <HeaderComp/>
    <div className="container-fluid ">
      <div className="row container_Dash">
     <NavScreen/>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex flex-column justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
         <h2>Admin Screen</h2>
         <div>
      <button onClick={handleSearch} className='btn btn-info mb-4'> <i className="fa-solid fa-magnifying-glass"></i> </button>
      <button onClick={handleCancel} className='btn btn-danger mr-3 mb-4'> <i className="fa-solid fa-x"></i> </button>
      </div>
         { search 
        ? <SearchScreen token={token}/>:
        
           <table className='table text-white '>
           <thead className='table-primary'>
               <tr>
                   <th>Nombre</th>
                   <th>Mail</th>
                   <th>Cell</th>
                   <th>Direction</th>
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
                           
                           <td>
                               <Link to={`/home/editAdmin/${product.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                               <button onClick={()=> delProduct(product.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                           </td>
                       </tr>
                   ))
               }
           </tbody>
       </table> }
          
           
          </div> 
        </main>
      </div>
    </div>
        </div>
    
    
  )
}
