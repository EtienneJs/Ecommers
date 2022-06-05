import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'
import { SessionContext } from '../auth/context/SessionContex'
import Cookies from 'universal-cookie'


export const PublicRoute = ({children}) => {

 const {user} = useContext(AuthContext)
 const cookie = new Cookies();
 const checked = cookie.get('check')
 return (!checked && !user.logged) ? children : <Navigate to='/'/>
}
