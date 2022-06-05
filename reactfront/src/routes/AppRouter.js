import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginScreen } from '../auth/LoginScreen'
import { RegisterScreen } from '../auth/RegisterScreen'
import { MainRoute } from './MainApp'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'



export const AppRouter = () => {
 

  return (
    <div>
         <BrowserRouter>
          <Routes> 
             
                <Route path='/login' element={
             
                  <PublicRoute>
                    <LoginScreen/>
                </PublicRoute>
                }/>
                
                <Route path='/register' element={<RegisterScreen/>}/>
                

                <Route path='/*' element={
             
                <PrivateRoute>
                    <MainRoute/>
                </PrivateRoute>
                }
                />

                <Route path="*"/>
               

          </Routes>
      </BrowserRouter>
           
    </div>
  )
}
