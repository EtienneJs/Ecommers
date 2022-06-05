import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext';




export const AuthorizationAdmin= ({children}) => {
  const {user} = useContext(AuthContext)
  return (user.name === 'Admin' ) ?  children : <Navigate to={'/home'}/>      
  


}