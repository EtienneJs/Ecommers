import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../auth/LoginScreen'

export const AuthRoute = () => {
  return (
      <>
    <Routes>
        <Route path='/login' element={<LoginScreen/>}/>
    </Routes>
      </>
  )
}
