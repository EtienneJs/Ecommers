import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import '../styles/dashStyle.css'
import { HeaderComp } from './Nav/HeaderComp'
import {Chart as ChartJs, BarElement, CategoryScale, LinearScale, LineElement, PointElement} from 'chart.js'
import {Bar,Line} from 'react-chartjs-2'

import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'
import { TYPES } from '../auth/types/TYPES'
import { NavScreen } from './Nav/NavScreen'
const URIV ='http://localhost:8000/dashboard/getVentas'
const URI ='http://localhost:8000/dashboard/getClient'
const URIP ='http://localhost:8000/dashboard/getProducts'

ChartJs.register(
  LinearScale,
  CategoryScale,
  BarElement,
  LineElement,
  PointElement)

export const HomeScreen = () => {
  const {user, dispach} = useContext(AuthContext)
  const token = user.token
  const [producto, setProducto] = useState(false)
  const [cliente, setCliente] = useState(false)
  const [ventas, setVentas] = useState(false)
  const getProducto = async () =>{
    const res = await axios.get(URIP,  {
      headers:{"Authorization": `Bearer ${token}` }
    })
    const {message, products, name} = res.data 
    if(message === 'permitido' || name==='Admin'){
      setProducto(products)
    }
} 
const getClient = async () =>{
  const res = await axios.get(URI,  {
    headers:{"Authorization": `Bearer ${token}` }
  })
  const {message, client, name} = res.data 
  if(message === 'permitido' || name==='Admin'){
    setCliente(client)
  }
} 
const getVentas = async () =>{
  const res = await axios.get(URIV,  {
    headers:{"Authorization": `Bearer ${token}` }
  })
  const {message, ventas, name} = res.data 
  if(message === 'permitido' || name==='Admin'){
    setVentas(ventas)
  }
} 

useEffect(()=>{
  getProducto()
  getClient()
  getVentas()
}, [])
const getFechasP = () =>{
    if(producto !== false){
      const mapFecha = producto.map(map => map.createdAt.slice(8,10))
      let result = mapFecha.filter((item,index)=>{
        return mapFecha.indexOf(item) === index;
      })
      return result
    }
   
  
}
const getFechasC = () =>{
  if(cliente !== false){
    const mapFecha = cliente.map(map => map.createdAt.slice(8,10))
    let result = mapFecha.filter((item,index)=>{
      return mapFecha.indexOf(item) === index;
    })
    return result
  }
 

}
const getFechasV = () =>{
  if(ventas !== false){
    const mapFecha = ventas.map(map => map.createdAt.slice(8,10))
    let result = mapFecha.filter((item,index)=>{
      return mapFecha.indexOf(item) === index;
    })
    return result
  }
 

}
const getProdLength = () =>{
  if(producto !== false){
    const mapFecha = producto.map(map => map.createdAt.slice(8,10))
    let almc= []
    let contador = 1
    for(let i = 0; i < mapFecha.length; i++){
      if(mapFecha[i+1] === mapFecha[i]){
        contador ++;
      } else {
        almc.push(contador)
      }
    }
    return almc
  }
}
const getClientLength = () =>{
  if(cliente !== false){
    console.log(cliente)
    const mapFecha = cliente.map(map => map.createdAt.slice(8,10))
    let almc= []
    let contador = 1
    for(let i = 0; i < mapFecha.length; i++){
      if(mapFecha[i+1] === mapFecha[i]){
        contador ++;
      } else {
        almc.push(contador)
      }
    }

    return almc
  }
}
const getVentasLength = () =>{
  if(ventas !== false){
    console.log(cliente)
    const mapFecha = ventas.map(map => map.createdAt.slice(8,10))
    let almc= []
    let contador = 1
    for(let i = 0; i < mapFecha.length; i++){
      if(mapFecha[i+1] === mapFecha[i]){
        contador ++;
      } else {
        almc.push(contador)
      }
    }

    return almc
  }
}
getFechasP()
getProdLength()
getFechasC()
getClientLength()
getFechasV()
getVentasLength()

 let  data = {
    labels: getProdLength(),
    datasets: [{
        label: '# of Votes',
        data: getFechasP(),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}
let  options = {
  maintainAspectratio:false,
  scales: {
      y: {
          beginAtZero: true
      }
  },
  legend:{
    fonSize:10
  }
}
let  dataC = {
  labels: getClientLength(),
  datasets: [{
      label: '# of Votes',
      data: getFechasC(),
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
  }]
}
let  dataV = {
  labels: getVentasLength(),
  datasets: [{
      label: '# of Votes',
      data: getFechasV(),
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
  }]
}


  return (
    <div>
<HeaderComp/>
<div className="container-fluid ">
  <div className="row container_Dash">
 <NavScreen/>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className=" flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
      <h1> HomeScreen </h1>


   <div className='containerLine'>
   <div className='dasboard'>
   <h2> productos </h2>
   <Line
    className='lineProd'
   data={data}
   options={options}
   />

    </div>
    <div className='dasboard'>
    <h2> client </h2>
   <Line
    className='lineProd'
   data={dataC}
   options={options}
   />

    </div>
    <div className='dasboard'>
      <h2> Ventas </h2>
   <Line
    className='lineProd'
   data={dataV}
   options={options}
   />

    </div>
   </div>

      </div> 
    </main>
  </div>
</div>
    </div>
    
    
  )
}
