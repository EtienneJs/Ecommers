import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AllUsers } from '../components/Client/AllUsers'
import EditProduct from '../components/Products/EditProduct'
import { HomeScreen } from '../components/homeScreen'

import { ProductsScreen } from '../components/Products/ProductsScreen'
import {AllAdmin} from '../components/Admins/AllAdmin'
import { EditClient } from '../components/Client/EditClient'
import { OrderScreen } from '../components/Order/OrderScreen'
import { AuthorizationProducts } from './AuthorizationProducts'
import { AuthorizationOrder } from './AuthorizationOrder'
import { AuthorizationClient } from './AuthorizationClient'
import { AuthorizationAdmin } from './AuthorizationAdmin'
import { NewAdminScreen } from '../components/Admins/NewAdminScreen'
import { AuthorizationNewAdmins } from './AuthorizationNewAdmin'
import { AuthorizationPutProducts } from './AuthorizationPutProduct'
import { EditOrders } from '../components/Order/editOrders'
import { EditAdmin } from '../components/Admins/EditAdmin'
import { Login } from './LoginYes'
import { NewProduct } from '../components/Products/NewProduct'
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

        <Route path='/home/order' element={<AuthorizationOrder>
           <OrderScreen/>
         </AuthorizationOrder>}/>
         <Route path='/home/editOrders/:id' element={<AuthorizationOrder>
           <EditOrders/>
         </AuthorizationOrder>}/>
         
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
         
  
    </Routes>
      </>
  )
}
