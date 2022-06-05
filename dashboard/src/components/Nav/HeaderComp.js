import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'
import { TYPES } from '../../auth/types/TYPES'

export const HeaderComp = () => {
  const {dispach} = useContext(AuthContext)

  const logout =()=>{
    const action = {
      type: TYPES.logout,
      
    }
    dispach(action)
  }
  return (
    <>
     <div className="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow">
    <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to='/home'>Dashboard</Link>
    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="navbar-nav">
      <div className="nav-item text-nowrap">
        <button onClick={logout} type="button" className="px-3 btn btn-danger">Logout</button>
      </div>
    </div>
  </div>
    </>
  )
}
