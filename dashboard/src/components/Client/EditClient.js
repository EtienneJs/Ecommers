import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
const URI = 'http://localhost:8000/dashboard/client/'

export const EditClient = () => {
    const [nombre, setNombre] = useState('')
    const [mail, setMail] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()

    const update = async(e) =>{
        e.preventDefault()
        await axios.put(`${URI}${id}`, {
            name: nombre,
            mail: mail,
        })
        navigate('/home/allUser')
    }

    useEffect(()=>{
        getBlogById()
},[])

    const getBlogById = async () =>{
        const res = await axios.get(URI+id)
        setNombre(res.data[0].name)
        setMail(res.data[0].mail)

    }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>

        
    <h1>Edit Client</h1>
      <form onSubmit={update}>
          <div className="mb-3">
              <label className="form-label">Name</label>
              <input
              value={nombre}
              onChange={(e)=> setNombre(e.target.value)}
              type='text'
              className="form-control"
              />
              </div>
              <div className="mb-3">
              <label className="form-label">Categoria</label>
              <input
              value={mail}
              onChange={(e)=> setMail(e.target.value)}
              type='text'
              className="form-control"
              />
              </div>

          <button className="btn btn-outline-primary">Save</button>
      </form>
    </div>
  )
}
