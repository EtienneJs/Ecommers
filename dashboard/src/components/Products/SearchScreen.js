import React, { useContext, useEffect, useState } from 'react'
import {  Link } from 'react-router-dom'
import axios from 'axios'
import {getProducts} from './getsProducts'
import { orderBy } from './orderBy'
import { AuthContext } from '../../auth/context/AuthContext'
const URI2 ='http://localhost:8000/dashboard/'

export const SearchScreen = (token) => {
  const {user, dispach} = useContext(AuthContext)
  const tokenR = user.token
  const [productName, setProductName] = useState('')
  const [productFilter, setProductFilter] = useState()
  const [filter, setFilter] = useState('descripcion')
  
  const handleChangeName = (e) =>{
    e.preventDefault()
    setProductName(e.target.value)
  }
  const handleSubmitName = () =>{
    const promesa1 = Promise.resolve( getProducts(filter,productName,tokenR))
    promesa1.then((value)=>{
      console.log(value)
     if(productName === ''){
      setProductFilter(value)
     } else {setProductFilter(value)}
    })
  }

  useEffect(()=>{
    getProducts()
  }, [])


  const delProduct = async(id)=>{
    await axios.delete(`${URI2}${id}`)
    const promesa1 = Promise.resolve( getProducts(filter,productName,tokenR))
    promesa1.then((value)=>{
      setProductFilter(value)
    })
  }
  const handleOnchangeFilter = (e) =>{
    setFilter(e.target.value)
    getProducts(filter,productName,tokenR)
  
  }

  const handleUp =(filterName, type)=>{
    const promesa1 = Promise.resolve( getProducts(filter,productName,tokenR))
    promesa1.then((value)=>{
      const order = orderBy(value,type, 'top', filterName)
      setProductFilter(order)
    })
  }
  const handleDown =(filterName, type)=>{
    const promesa1 = Promise.resolve( getProducts(filter,productName,tokenR))
    promesa1.then((value)=>{
      const order = orderBy(value,type, 'down', filterName)
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
  <option value='descripcion'>Nombre</option>
  <option value='id_categorias'>Categoria</option>
  <option value='id_proveedor'>Proveedor</option>
  <option value='talla'>Talla</option>
</select>
<button  onClick={handleSubmitName} className='btn btn-outline-primary mt-1'>Buscar...</button>
    </div>
  <div >
    <h4>Resultado</h4>
   {
    productFilter

    && 

    <table className='table text-white '>
    <thead className='table-primary'>
        <tr>
            <th>Nombre <i onClick={() => handleUp('descripcion','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('descripcion','string')} className="fa-solid fa-arrow-down"></i></th>

            <th>Categoria <i onClick={() => handleUp('id_categorias','number')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('id_categorias','number')} className="fa-solid fa-arrow-down"></i></th>

            <th>Talla <i onClick={() => handleUp('talla','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('talla','string')} className="fa-solid fa-arrow-down"></i></th>

            <th>Stock <i onClick={() => handleUp('stockProduct','number')  } className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('stockProduct','number')  } className="fa-solid fa-arrow-down"></i></th>

            <th>Price <i onClick={() => handleUp('priceProduct','number')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('priceProduct','number')} className="fa-solid fa-arrow-down"></i></th>
            
            <th>proveedor <i onClick={() => handleUp('id_proveedor','number')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('id_proveedor','number')} className="fa-solid fa-arrow-down"></i></th>
            
            <th>Action</th>

        </tr>
    </thead>
    <tbody>
        {
          
            productFilter.map((product)=>(
                <tr key={product.id}> 
                    <td>{product.descripcion}</td>
                    <td>{product.id_categorias}</td>
                    <td>{product.talla}</td>
                    <td>{product.stock}</td>
                    <td>{product.precio}</td>
                    <td>{product.id_proveedor}</td>
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
