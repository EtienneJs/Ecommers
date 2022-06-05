import React, { useEffect, useState } from 'react'
import {  Link } from 'react-router-dom'
import axios from 'axios'
import {getProducts} from './getsProducts'
import { orderBy } from './orderBY'
const URI2 ='http://localhost:8000/dashboard/'

export const SearchScreen = (token) => {
  const tokenR = token.token
  const [productName, setProductName] = useState('')
  const [productFilter, setProductFilter] = useState()
  const [filter, setFilter] = useState('nameProduct')
  
  const handleChangeName = (e) =>{
    e.preventDefault()
    setProductName(e.target.value)
  }
  const handleSubmitName = () =>{
    const promesa1 = Promise.resolve( getProducts(filter,productName,tokenR))
    promesa1.then((value)=>{
      setProductFilter(value)
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
  <option value='nameProduct'>Nombre</option>
  <option value='categProduct'>Categoria</option>
  <option value='tallaProduct'>Talla</option>
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
            <th>Nombre <i onClick={() => handleUp('nameProduct','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('nameProduct','string')} className="fa-solid fa-arrow-down"></i></th>

            <th>Categoria <i onClick={() => handleUp('categProduct','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('categProduct','string')} className="fa-solid fa-arrow-down"></i></th>

            <th>Talla <i onClick={() => handleUp('tallaProduct','string')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('tallaProduct','string')} className="fa-solid fa-arrow-down"></i></th>

            <th>Stock <i onClick={() => handleUp('stockProduct','number')  } className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('stockProduct','number')  } className="fa-solid fa-arrow-down"></i></th>

            <th>Price <i onClick={() => handleUp('priceProduct','number')} className="fa-solid fa-arrow-up"></i><i onClick={() => handleDown('priceProduct','number')} className="fa-solid fa-arrow-down"></i></th>
            
            <th>Action</th>

        </tr>
    </thead>
    <tbody>
        {
          
            productFilter.map((product)=>(
                <tr key={product.id}> 
                    <td>{product.nameProduct}</td>
                    <td>{product.categProduct}</td>
                    <td>{product.tallaProduct}</td>
                    <td>{product.stockProduct}</td>
                    <td>{product.priceProduct}</td>
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
