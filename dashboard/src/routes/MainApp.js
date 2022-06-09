import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AllUsers } from '../components/Client/AllUsers'
import EditProduct from '../components/Products/EditProduct'
import { HomeScreen } from '../components/homeScreen'

import { ProductsScreen } from '../components/Products/ProductsScreen'
import {AllAdmin} from '../components/Admins/AllAdmin'
import { EditClient } from '../components/Client/EditClient'
import { OrderScreen } from '../components/provedores/OrderScreen'
import { AuthorizationProducts } from './AuthorizationProducts'
import { AuthorizationClient } from './AuthorizationClient'
import { AuthorizationAdmin } from './AuthorizationAdmin'
import { AuthorizationProvedoresEdit } from './AuthorizationProvedoresEdit'
import { AuthorizationProvedoresPut } from './AuthorizationProvedoresPut'
import { NewAdminScreen } from '../components/Admins/NewAdminScreen'
import { AuthorizationNewAdmins } from './AuthorizationNewAdmin'
import { AuthorizationPutProducts } from './AuthorizationPutProduct'
import { EditOrders, EditProvedores } from '../components/provedores/editOrders'
import { EditAdmin } from '../components/Admins/EditAdmin'
import { Login } from './LoginYes'
import { NewProduct } from '../components/Products/NewProduct'
import { NewProvedor } from '../components/provedores/NewProvedor'
import { VentasScreen } from '../components/Ventas/VentasScreen'
import { AuthorizationEditVentas } from './AuthorizationEditVentas'
import { EditVentas } from '../components/Ventas/editVentas'
import { AuthorizationEditFacturas } from './AuthorizationEditFacturas'
import { FacturasScreen } from '../components/Facturas/FacturaScreen'
import { EditFacturas } from '../components/Facturas/editFacturas'
import { AuthorizationEditCategorias } from './AuthorizationEditCategorias'
import { CategoriaScreen } from '../components/categorias/CategoriaScreen'
import { EditCategorias } from '../components/categorias/editCategorias'
import { AuthorizationPutCategorias } from './AuthorizationPutCategorias'
import { NewCategoria } from '../components/categorias/NewCategoria'
export const MainRoute = () => {
  
  return (
      <>
    <Routes>
        <Route path='/' element={<Login/>}/>
         <Route path='/home/' element={< HomeScreen />} />   
         
         <Route path='/home/allProduct' element={
         <AuthorizationProducts>
           <ProductsScreen/>
         </AuthorizationProducts>}/>

         <Route path='/home/edit/:id' element={
         <AuthorizationProducts>
           <EditProduct/>
         </AuthorizationProducts>}/>
         
         <Route path='/home/newProduct' element={
         <AuthorizationPutProducts>
           <NewProduct/>
         </AuthorizationPutProducts>}/> 

         
         <Route path='/home/allUser' element={
         <AuthorizationClient>
           <AllUsers/>
         </AuthorizationClient>}/> 
         
         <Route path='/home/editClient/:id' element={
         <AuthorizationClient>
           <EditClient/>
         </AuthorizationClient>}/>

        <Route path='/home/provedores' element={<AuthorizationProvedoresEdit>
           <OrderScreen/>
         </AuthorizationProvedoresEdit>}/>

         <Route path='/home/provedores/:id' element={<AuthorizationProvedoresPut>
           <EditProvedores/>
         </AuthorizationProvedoresPut>}/>

         <Route path='/home/newprovedores' element={<AuthorizationProvedoresEdit>
           <NewProvedor/>
         </AuthorizationProvedoresEdit>}/>
         
         <Route path='/home/allAdmin' element={
           <AuthorizationAdmin>
           <AllAdmin/>
         </AuthorizationAdmin>}/>
       
         <Route path='/home/newAdmin' element={
         <AuthorizationNewAdmins>
          <NewAdminScreen/>
         </AuthorizationNewAdmins>}/>

         <Route path='/home/editAdmin/:id' element={<AuthorizationNewAdmins>
           <EditAdmin/>
         </AuthorizationNewAdmins>}/>
         <Route path='/home/ventas' element={<AuthorizationEditVentas>
           <VentasScreen/>
         </AuthorizationEditVentas>}/>
         <Route path='/home/ventas/:id' element={<AuthorizationEditVentas>
           <EditVentas/>
         </AuthorizationEditVentas>}/>
         <Route path='/home/facturas' element={<AuthorizationEditFacturas>
           <FacturasScreen/>
         </AuthorizationEditFacturas>}/>
         <Route path='/home/facturas/:id' element={<AuthorizationEditFacturas>
           <EditFacturas/>
         </AuthorizationEditFacturas>}/>
         <Route path='/home/categorias' element={<AuthorizationEditCategorias>
           <CategoriaScreen/>
         </AuthorizationEditCategorias>}/>
         <Route path='/home/newcategorias' element={<AuthorizationPutCategorias>
           <NewCategoria/>
         </AuthorizationPutCategorias>}/>
         <Route path='/home/categorias/:id' element={<AuthorizationEditFacturas>
           <EditCategorias/>
         </AuthorizationEditFacturas>}/>
         
  
    </Routes>
      </>
  )
}
