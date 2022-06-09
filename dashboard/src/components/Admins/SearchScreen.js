import React, { useContext, useEffect, useState } from 'react'
import {  Link } from 'react-router-dom'
import axios from 'axios'
import { orderByAdmin } from './orderByAdmin'
import { getAdmin } from './getAdmins'
import { AuthContext } from '../../auth/context/AuthContext'
const URI2 ='http://localhost:8000/dashboard/'

export const SearchScreen = () => {
  const {user, dispach} = useContext(AuthContext)
  const token = user.token
  const [admin, setAdmin] = useState([])
  const [productName, setProductName] = useState('')
  const [productFilter, setProductFilter] = useState()
  const [filter, setFilter] = useState('name')
  
  const handleChangeName = (e) =>{
    e.preventDefault()
    setProductName(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    const promesa1 = Promise.resolve( getAdmin(filter,productName,token))
    promesa1.then((value)=>{
      if(productName === ''){
        console.log(value)
        setProductFilter(value)
       } else {setProductFilter(value)}
    })
  }
  useEffect(()=>{
    getAdmin()
  }, [])


  const delProduct = async(id)=>{
    await axios.delete(`${URI2}${id}`)
    const promesa1 = Promise.resolve( getAdmin(filter,productName,token))
    promesa1.then((value)=>{
      setProductFilter(value)
    })
  }
  const handleOnchangeFilter = (e) =>{
    setFilter(e.target.value)
    getAdmin(filter,productName,token)
  
  }

  const handleUp =(filterName, type)=>{
    const promesa1 = Promise.resolve( getAdmin(filter,productName,token))
    promesa1.then((value)=>{
      const order = orderByAdmin(value,type, 'top', filterName)
      console.log(order)
      setProductFilter(order)
    })
  }
  const handleDown =(filterName, type)=>{
    const promesa1 = Promise.resolve( getAdmin(filter,productName,token))
    promesa1.then((value)=>{
      const order = orderByAdmin(value,type, 'down', filterName)
      console.log(order)
      setProductFilter(order)
    })
  }

  

  return (
    <>
       <h1>Busqueda</h1>

<div className='row w-100 '>
  
    <div className='d-flex flex-column justify-content-center align-items-center'>
 <h4>{filter}</h4>

<input
type='text'
placeholder='Buscar un heroe'
autoComplete='off'
className='form-control w-50 mb-2'
value={productName}
onChange={handleChangeName}
/>
<select onChange={handleOnchangeFilter}>
  <option value='name'>Nombre</option>
  <option value='mail'>Mail</option>
  <option value='cell'>Phone</option>
  <option value='direccion'>Talla</option>
</select>
<button  onClick={handleSubmit} className='btn btn-outline-primary mt-1'>Buscar...</button>
    </div>
  <div >
    <h4>Resultado</h4>
   {
    productFilter

    && 

    <table className='table text-white '>
    <thead className='table-primary'>
        <tr>
            <th>Nombre <i onClick={() => handleUp('name','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('name','string')} className="fa-solid fa-arrow-down"></i></th>

            <th>mail <i onClick={() => handleUp('mail','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('mail','string')} className="fa-solid fa-arrow-down"></i></th>

            <th>Phone <i onClick={() => handleUp('cell','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('cell','string')} className="fa-solid fa-arrow-down"></i></th>

            <th>Direccion <i onClick={() => handleUp('direction','string')  } className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('direction','string')  } className="fa-solid fa-arrow-down"></i></th>

           
            
            <th>Action</th>

        </tr>
    </thead>
    <tbody>
        {
          
            productFilter.map((product)=>(
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
</table>

  } 
  
  </div>
</div>
    </>
  )
}
