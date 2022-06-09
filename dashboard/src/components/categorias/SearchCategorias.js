import React, { useContext, useEffect, useState } from 'react'
import {  Link } from 'react-router-dom'
import axios from 'axios'
import { getCategorias } from './getCategorias'
import { orderByCategorias } from './OrderByCategorias'
import { AuthContext } from '../../auth/context/AuthContext'
const URI2 ='http://localhost:8000/dashboard/'

export const SearchCategoriasScreen = () => {
  const {user} = useContext(AuthContext)
   const token = user.token
  const [productName, setProductName] = useState('')
  const [productFilter, setProductFilter] = useState()
  const [filter, setFilter] = useState('descripcion')
  
  const handleChangeName = (e) =>{
    e.preventDefault()
    setProductName(e.target.value)
  }
  const handleSubmitName = () =>{
    const promesa1 = Promise.resolve( getCategorias(filter,productName,token))
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
    getCategorias()
  }, [])

  const delProduct = async(id)=>{
    await axios.delete(`${URI2}${id}`,  {
        headers:{"Authorization": `Bearer ${token}` }
      })
    const promesa1 = Promise.resolve( getCategorias(filter,productName))
    promesa1.then((value)=>{
      setProductFilter(value)
    })
  }
  const handleOnchangeFilter = (e) =>{
    setFilter(e.target.value)
    getCategorias(filter,productName)
  
  }

  const handleUp =(filterName, type)=>{
    const promesa1 = Promise.resolve( getCategorias(filter,productName, token))
    promesa1.then((value)=>{
      if(productName === ''){
        const order = orderByCategorias(value[0],type, 'top', filterName)
      setProductFilter(order)
      } else {
        const order = orderByCategorias(value,type, 'top', filterName)
      setProductFilter(order)
      }
    })
  }
  const handleDown =(filterName, type)=>{
    const promesa1 = Promise.resolve( getCategorias(filter,productName, token))
    promesa1.then((value)=>{
      if(productName === ''){
        const order = orderByCategorias(value[0],type, 'down', filterName)
      setProductFilter(order)
      } else {
        const order = orderByCategorias(value,type, 'down', filterName)
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
  <option value='descripcion'>Descripcion</option>
  <option value='createdAt'>Creado el </option>
  <option value='updatedAt'>Actualizado el </option>
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
            <th>Descripcion <i onClick={() => handleUp('descripcion','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('descripcion','string')} className="fa-solid fa-arrow-down"></i></th>

            <th>Creado el <i onClick={() => handleUp('createdAt','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('createdAt','string')} className="fa-solid fa-arrow-down"></i></th>

            <th>Actualizado el <i onClick={() => handleUp('updatedAt','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('updatedAt','string')} className="fa-solid fa-arrow-down"></i></th>

            
            <th>Action</th>

        </tr>
    </thead>
    <tbody>
        {
          
            productFilter.map((product)=>(
                <tr key={product.id}> 
                    <td>{product.descripcion}</td>
                    <td>{product.createdAt}</td>
                    <td>{product.updatedAt}</td>
                    <td>
                        <Link to={`/home/categorias/${product.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
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
