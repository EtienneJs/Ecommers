import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'
import { TYPES } from '../../auth/types/TYPES'
const {
editProduc,
putProduc,
editVentas,
proveedoresEdit,
proveedoresPut,
editUsers,
editFacturas,
putFacturas,
putCategorias,
editCategorias
} ={
  editProduc:"http://localhost:8000/dashboard/editProduct",
  putProduc:"http://localhost:8000/dashboard/registerProducts",
  editVentas:"http://localhost:8000/dashboard/putVentas",
  proveedoresEdit:"http://localhost:8000/dashboard/proveedoresEdit",
  proveedoresPut:"http://localhost:8000/dashboard/proveedoresPut",
  editUsers:"http://localhost:8000/dashboard/editUsers",
  editAdmins:"http://localhost:8000/dashboard/editAdmins",
  editFacturas:"http://localhost:8000/dashboard/editFacturas",
  putFacturas:"http://localhost:8000/dashboard/putFacturas",
  putCategorias:"http://localhost:8000/dashboard/putCategorias",
  editCategorias:"http://localhost:8000/dashboard/editCategorias",
}


export const NavScreen = () => {
  const {user, dispach} = useContext(AuthContext)
  const token = user.token
  useEffect(()=>{
    getProductEdit()
    getProductPut()
    getEditVentas()
    getEditProveedores()
    getPutProveedores()
    getEditUsers()
    getEditFacturas()
    getPutFacturas()
    getEditCategorias()
    getPutCategorias()
  }, [])
  const getProductEdit = async() =>{
    const ProductEdit = await axios.get(editProduc,  {
      headers:{"Authorization": `Bearer ${token}` }
    })
    const {name , message } = ProductEdit.data 

  
    if(message === 'permitido' || name==='Admin'){
     
    } else {
      const action = {
        type: TYPES.login,
        payload:{...user,editProduct:'denegado', name}
      }
      dispach(action)
    }
  }
  const getProductPut = async() =>{
    const ProductPut = await axios.get(putProduc,  {
      headers:{"Authorization": `Bearer ${token}` }
    })
    const {name , message } = ProductPut.data 

  
    if(message === 'permitido' || name==='Admin'){
     
    } else {
      const action = {
        type: TYPES.login,
        payload:{...user,putProduct:'denegado', name}
      }
      dispach(action)
    }
  }
  const getEditVentas = async () =>{
    const ProductEdit = await axios.get(editVentas,  {
      headers:{"Authorization": `Bearer ${token}` }
    })
    const {message, name} = ProductEdit.data 
   
   if(message !== undefined){
     console.log(message)
    if(message === 'permitido' || name==='Admin'){
    } else {
      const action = {
        type: TYPES.login,
        payload:{...user,editVentas:'denegado',name }
      }
      dispach(action)
    }
   }
}
const getEditProveedores = async () =>{
  const ProductEdit = await axios.get(proveedoresEdit,  {
    headers:{"Authorization": `Bearer ${token}` }
  })
  const {message, name} = ProductEdit.data 
 
 if(message !== undefined){
   console.log(message)
  if(message === 'permitido' || name==='Admin'){
  } else {
    const action = {
      type: TYPES.login,
      payload:{...user,proveedoresEdit:'denegado',name }
    }
    dispach(action)
  }
 }
}
const getEditUsers = async () =>{
  const ProductEdit = await axios.get(editUsers,  {
    headers:{"Authorization": `Bearer ${token}` }
  })
  const {message, name} = ProductEdit.data 
 
 if(message !== undefined){
   console.log(message)
  if(message === 'permitido' || name==='Admin'){
  } else {
    const action = {
      type: TYPES.login,
      payload:{...user,editUsers:'denegado',name }
    }
    dispach(action)
  }
 }
}
const getEditFacturas = async () =>{
  const ProductEdit = await axios.get(editFacturas,  {
    headers:{"Authorization": `Bearer ${token}` }
  })
  const {message, name} = ProductEdit.data 
 
 if(message !== undefined){
  if(message === 'permitido' || name==='Admin'){
  } else {
    const action = {
      type: TYPES.login,
      payload:{...user,editFacturas:'denegado',name }
    }
    dispach(action)
  }
 }
}
const getPutFacturas = async () =>{
  const ProductEdit = await axios.get(putFacturas,  {
    headers:{"Authorization": `Bearer ${token}` }
  })
  const {message, name} = ProductEdit.data 
 
 if(message !== undefined){
  if(message === 'permitido' || name==='Admin'){
  } else {
    const action = {
      type: TYPES.login,
      payload:{...user,putFacturas:'denegado',name }
    }
    dispach(action)
  }
 }
}
const getPutProveedores = async () =>{
  const ProductEdit = await axios.get(proveedoresPut,  {
    headers:{"Authorization": `Bearer ${token}` }
  })
  const {message, name} = ProductEdit.data 
 
 if(message !== undefined){
   console.log(message)
  if(message === 'permitido' || name==='Admin'){
  } else {
    const action = {
      type: TYPES.login,
      payload:{...user,proveedoresPut:'denegado',name }
    }
    dispach(action)
  }
 }
}
const getEditCategorias = async () =>{
  const ProductEdit = await axios.get(editCategorias,  {
    headers:{"Authorization": `Bearer ${token}` }
  })
  const {message, name} = ProductEdit.data 
 
 if(message !== undefined){
  if(message === 'permitido' || name==='Admin'){
  } else {
    const action = {
      type: TYPES.login,
      payload:{...user,editCategorias:'denegado',name }
    }
    dispach(action)
  }
 }
}
const getPutCategorias = async () =>{
  const ProductEdit = await axios.get(putCategorias,  {
    headers:{"Authorization": `Bearer ${token}` }
  })
  const {message, name} = ProductEdit.data 
 
 if(message !== undefined){
  if(message === 'permitido' || name==='Admin'){
  } else {
    const action = {
      type: TYPES.login,
      payload:{...user,putCategorias:'denegado',name }
    }
    dispach(action)
  }
 }
}
  return (
    <>
     <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-primary sidebar collapse">
    <div className="position-sticky pt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to='/home'  className="nav-link text-white" aria-current="page" href="/">
            <span data-feather="home"></span>
            Dashboard
          </Link>
        </li>
        {
           ( user.editProduct === 'permitido' ) &&
          <li className="nav-item">
          <Link to='/home/allProduct'  className="nav-link text-white" href="verProducts">
            <span data-feather="users"></span>
            Ver Todos los productos
          </Link>
        </li>
        }

        {
          ( user.putProduct === 'permitido') &&
          <li className="nav-item">
          <Link to='/home/newProduct'  className="nav-link text-white" href="products">
            <span data-feather="shopping-cart"></span>
           Ingresar un producto
          </Link>
        </li>
        }
        
        { (user.name === 'Admin' || user.proveedoresEdit === 'permitido' ) &&
          <li className="nav-item">
          <Link to='/home/provedores'  className="nav-link text-white" href="usuarios">
            <span data-feather="users"></span>
            Edit provedores
          </Link>
        </li>
        }
          
          { (user.name === 'Admin' || user.proveedoresPut === 'permitido' ) &&
          <li className="nav-item">
          <Link to='/home/newprovedores'  className="nav-link text-white" href="usuarios">
            <span data-feather="users"></span>
            New provedores
          </Link>
        </li>
        }
        { (user.name === 'Admin' || user.editUsers === 'permitido' ) &&
          <li className="nav-item">
          <Link to='/home/allUser'  className="nav-link text-white" href="usuarios">
            <span data-feather="users"></span>
            Usuarios registrados
          </Link>
        </li>
        }
        { (user.name === 'Admin' ) &&
          <li className="nav-item">
          <Link to='/home/newAdmin'  className="nav-link text-white" href="usuarios">
            <span data-feather="users"></span>
            Register Admin
          </Link>
        </li>
        }
        
        { (user.name === 'Admin' ) &&
          <li className="nav-item">
          <Link to='/home/allAdmin'  className="nav-link text-white" href="usuarios">
            <span data-feather="users"></span>
            Admins
          </Link>
        </li>
        }
         { (user.name === 'Admin' || user.editVentas === 'permitido' ) &&
          <li className="nav-item">
          <Link to='/home/ventas'  className="nav-link text-white" href="usuarios">
            <span data-feather="users"></span>
            Ventas
          </Link>
        </li>
        }
         { (user.name === 'Admin' || user.editFacturas === 'permitido' ) &&
          <li className="nav-item">
          <Link to='/home/facturas'  className="nav-link text-white" href="usuarios">
            <span data-feather="users"></span>
            facturas
          </Link>
        </li>
        }
         { (user.name === 'Admin' || user.editCategorias === 'permitido' ) &&
          <li className="nav-item">
          <Link to='/home/categorias'  className="nav-link text-white" href="usuarios">
            <span data-feather="users"></span>
            Categorias
          </Link>
        </li>
        }
        { (user.name === 'Admin' || user.putCategorias === 'permitido' ) &&
          <li className="nav-item">
          <Link to='/home/newcategorias'  className="nav-link text-white" href="usuarios">
            <span data-feather="users"></span>
            Nueva Categorias
          </Link>
        </li>
        }
        
      </ul>
    </div>
  </nav>
    </>
  )
}
