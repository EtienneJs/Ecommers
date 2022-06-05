import { useContext, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext';
export const Login = () => {
    const navigate = useNavigate()
  const {user} = useContext(AuthContext)
    useEffect(()=>{ login()},[])
    const login =()=>{
        (user.UserCheck) ?  navigate('/home') : navigate('/login') 
    }
       
}