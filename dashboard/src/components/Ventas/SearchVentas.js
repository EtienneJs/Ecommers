import React, { useContext, useEffect, useState } from 'react'
import {  Link } from 'react-router-dom'
import axios from 'axios'
import { getVentas } from './getVentas'
import {  orderByVentas } from './OrderByVentas'
import { AuthContext } from '../../auth/context/AuthContext'
const URI2 ='http://localhost:8000/dashboard/'

export const SearchVentasScreen = () => {
  const {user} = useContext(AuthContext)
   const token = user.token
  const [productName, setProductName] = useState('')
  const [productFilter, setProductFilter] = useState()
  const [filter, setFilter] = useState('id_facturas')
  
  const handleChangeName = (e) =>{
    e.preventDefault()
    setProductName(e.target.value)
  }
  const handleSubmitName = () =>{
    const promesa1 = Promise.resolve( getVentas(filter,productName,token))
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
    getVentas()
  }, [])

  const delProduct = async(id)=>{
    await axios.delete(`${URI2}${id}`,  {
        headers:{"Authorization": `Bearer ${token}` }
      })
    const promesa1 = Promise.resolve( getVentas(filter,productName))
    promesa1.then((value)=>{
      setProductFilter(value)
    })
  }
  const handleOnchangeFilter = (e) =>{
    setFilter(e.target.value)
    getVentas(filter,productName)
  
  }

  const handleUp =(filterName, type)=>{
    const promesa1 = Promise.resolve( getVentas(filter,productName, token))
    promesa1.then((value)=>{
      
      if(productName === ''){
        const order = orderByVentas(value[0],type, 'top', filterName)
      setProductFilter(order)
      } else {
        const order = orderByVentas(value,type, 'top', filterName)
      setProductFilter(order)
      }
    })
  }
  const handleDown =(filterName, type)=>{
    const promesa1 = Promise.resolve( getVentas(filter,productName, token))
    promesa1.then((value)=>{
      if(productName === ''){
        const order = orderByVentas(value[0],type, 'down', filterName)
        
      setProductFilter(order)
      } else {
        const order = orderByVentas(value,type, 'down', filterName)
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
  <option value='id_facturas'>idFacturas</option>
  <option value='id_productos'>idProductos</option>
  <option value='CU'>CU</option>
  <option value='Precio'>Precio</option>
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
            <th>id_facturas <i onClick={() => handleUp('id_facturas','number')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('id_facturas','number')} className="fa-solid fa-arrow-down"></i></th>

            <th>id_productos <i onClick={() => handleUp('id_productos','number')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('id_productos','number')} className="fa-solid fa-arrow-down"></i></th>

            <th> CU <i onClick={() => handleUp('CU','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('CU','string')} className="fa-solid fa-arrow-down"></i></th>
            <th> Precio <i onClick={() => handleUp('Precio','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('Precio','string')} className="fa-solid fa-arrow-down"></i></th>

            
            <th>Action</th>

        </tr>
    </thead>
    <tbody>
        {
          
            productFilter.map((product)=>(
                <tr key={product.id}> 
                    <td>{product.id_facturas}</td>
                    <td>{product.id_productos}</td>
                    <td>{product.CU}</td>
                    <td>{product.Precio}</td>
                    <td>
                        <Link to={`/home/ventas/${product.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
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
