import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'


export const PrivateRoute = ({children}) => {
 const {user} = useContext(AuthContext)

 return (user.UserCheck) ?  children : <Navigate to={'/login'}/>
}