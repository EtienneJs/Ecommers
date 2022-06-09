import React, { useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext';



export const AuthorizationEditCategorias= ({children}) => {
  const {user} = useContext(AuthContext)
  return (user.name === 'Admin' || user.editCategorias === 'permitido') ?  children : <Navigate to={'/home'}/>      
}