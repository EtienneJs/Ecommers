import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../auth/LoginScreen'
import { RegisterScreen } from '../auth/RegisterScreen'

export const AuthRoute = () => {
  return (
      <>
    <Routes>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
    </Routes>
      </>
  )
}
