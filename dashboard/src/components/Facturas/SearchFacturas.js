import React, { useContext, useEffect, useState } from 'react'
import {  Link } from 'react-router-dom'
import axios from 'axios'
import { getFacturas } from './getFacturas'
import {  orderByFacturas } from './OrderByFacturas'
import { AuthContext } from '../../auth/context/AuthContext'
const URI2 ='http://localhost:8000/dashboard/'

export const SearchFacturaScreen = () => {
  const {user} = useContext(AuthContext)
   const token = user.token
  const [productName, setProductName] = useState('')
  const [productFilter, setProductFilter] = useState()
  const [filter, setFilter] = useState('Usersid')
  
  const handleChangeName = (e) =>{
    e.preventDefault()
    setProductName(e.target.value)
  }
  const handleSubmitName = () =>{
    const promesa1 = Promise.resolve( getFacturas(filter,productName,token))
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
    getFacturas()
  }, [])

  const delProduct = async(id)=>{
    await axios.delete(`${URI2}${id}`,  {
        headers:{"Authorization": `Bearer ${token}` }
      })
    const promesa1 = Promise.resolve( getFacturas(filter,productName))
    promesa1.then((value)=>{
      setProductFilter(value)
    })
  }
  const handleOnchangeFilter = (e) =>{
    setFilter(e.target.value)
    getFacturas(filter,productName)
  
  }

  const handleUp =(filterName, type)=>{
    const promesa1 = Promise.resolve( getFacturas(filter,productName, token))
    promesa1.then((value)=>{
      if(productName === ''){
        const order = orderByFacturas(value[0],type, 'top', filterName)
      setProductFilter(order)
      } else {
        const order = orderByFacturas(value,type, 'top', filterName)
      setProductFilter(order)
      }
    })
  }
  const handleDown =(filterName, type)=>{
    const promesa1 = Promise.resolve( getFacturas(filter,productName, token))
    promesa1.then((value)=>{
      if(productName === ''){
        const order = orderByFacturas(value[0],type, 'down', filterName)
      setProductFilter(order)
      } else {
        const order = orderByFacturas(value,type, 'down', filterName)
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
type='number'
placeholder='Buscar una Factura'
autoComplete='off'
className='form-control w-50'
value={productName}
onChange={handleChangeName}
/>
<select  name='filter' onChange={handleOnchangeFilter}>
  <option value='Usersid'>Usersid</option>
  
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
            <th>Usersid <i onClick={() => handleUp('Usersid','number')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('Usersid','number')} className="fa-solid fa-arrow-down"></i></th> 
            <th>Action</th>

        </tr>
    </thead>
    <tbody>
        {
          
            productFilter.map((product)=>(
                <tr key={product.id}> 
                    <td>{product.Usersid}</td>
                    <td>
                        <Link to={`/home/facturas/${product.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
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
