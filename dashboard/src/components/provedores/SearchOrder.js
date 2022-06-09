import React, { useContext, useEffect, useState } from 'react'
import {  Link } from 'react-router-dom'
import axios from 'axios'
import { getOrders } from './getOrders'
import { orderByOrders } from './OrderByOrders'
import { AuthContext } from '../../auth/context/AuthContext'
const URI2 ='http://localhost:8000/dashboard/'

export const SearchOrderScreen = () => {
  const {user} = useContext(AuthContext)
   const token = user.token
  const [productName, setProductName] = useState('')
  const [productFilter, setProductFilter] = useState()
  const [filter, setFilter] = useState('nombre')
  
  const handleChangeName = (e) =>{
    e.preventDefault()
    setProductName(e.target.value)
  }
  const handleSubmitName = () =>{
    const promesa1 = Promise.resolve( getOrders(filter,productName,token))
    if(productName === ''){
      promesa1.then((value)=>{
        setProductFilter(value[0])
      })
    }else {
      promesa1.then((value)=>{
        setProductFilter(value)
      })   
    }
    

    
  }

  useEffect(()=>{
    getOrders()
  }, [])

  const delProduct = async(id)=>{
    await axios.delete(`${URI2}${id}`,  {
        headers:{"Authorization": `Bearer ${token}` }
      })
    const promesa1 = Promise.resolve( getOrders(filter,productName))
    promesa1.then((value)=>{
      setProductFilter(value)
    })
  }
  const handleOnchangeFilter = (e) =>{
    setFilter(e.target.value)
    getOrders(filter,productName)
  
  }

  const handleUp =(filterName, type)=>{
    const promesa1 = Promise.resolve( getOrders(filter,productName, token))
    promesa1.then((value)=>{
      if(productName === ''){
        const order = orderByOrders(value[0],type, 'top', filterName)
      setProductFilter(order)
      } else {
        const order = orderByOrders(value,type, 'top', filterName)
      setProductFilter(order)
      }
    })
  }
  const handleDown =(filterName, type)=>{
    const promesa1 = Promise.resolve( getOrders(filter,productName, token))
    promesa1.then((value)=>{
      if(productName === ''){
        const order = orderByOrders(value[0],type, 'down', filterName)
      setProductFilter(order)
      } else {
        const order = orderByOrders(value,type, 'down', filterName)
      setProductFilter(order)
      }
    })
  }
  return (
    <>
       <h1>Busqueda</h1>

<div className='row w-100'>
  <div className='d-flex'>
    <div className='d-flex flex-column justify-content-center align-items-center'>
 <h4>Nombre del producto </h4>

<input
type='text'
placeholder='Buscar un heroe'
autoComplete='off'
className='form-control w-50'
value={productName}
onChange={handleChangeName}
/>
<select  name='filter' onChange={handleOnchangeFilter}>
  <option value='nombre'>Nombre</option>
  <option value='direccion'>Direccion</option>
  <option value='telefono'>Telefono</option>
</select>
<button  onClick={handleSubmitName} className='btn btn-outline-primary mt-1'>Buscar...</button>


</div>
    </div>
  <div >
    <h4>Resultado</h4>
   {
    productFilter

    && 

    <table className='table text-white '>
    <thead className='table-primary'>
        <tr>
            <th>Nombre <i onClick={() => handleUp('nombre','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('nombre','string')} className="fa-solid fa-arrow-down"></i></th>

            <th>Direccion <i onClick={() => handleUp('direccion','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('direccion','string')} className="fa-solid fa-arrow-down"></i></th>

            <th> Telefono <i onClick={() => handleUp('telefono','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('telefono','string')} className="fa-solid fa-arrow-down"></i></th>

            
            <th>Action</th>

        </tr>
    </thead>
    <tbody>
        {
          
            productFilter.map((product)=>(
                <tr key={product.id}> 
                    <td>{product.nombre}</td>
                    <td>{product.direccion}</td>
                    <td>{product.telefono}</td>
                    <td>
                        <Link to={`/home/edit/${product.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
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
