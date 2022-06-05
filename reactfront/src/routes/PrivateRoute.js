import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'
import Cookies from 'universal-cookie'


export const PrivateRoute = ({children}) => {
 const {user} = useContext(AuthContext)
 const cookie = new Cookies();
 const checked = cookie.get('check')

 return (user.UserCheck || checked) ?  children : <Navigate to={'/login'}/>
}