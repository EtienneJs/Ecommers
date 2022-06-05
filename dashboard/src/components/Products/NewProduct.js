import React, { useContext, useEffect, useState } from 'react'

import { NavScreen } from '../Nav/NavScreen'
import * as XLSX from 'xlsx'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate} from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'
import { TYPES } from '../../auth/types/TYPES'
import { HeaderComp } from '../Nav/HeaderComp'
const URI ='http://localhost:8000/dashboard/registerProducts'





export const NewProduct = () => {
  const {user, dispach} = useContext(AuthContext)
  const token = user.token
    const navigate = useNavigate()
    const [excelFileError, setExcelFileError]=useState(null); 
    const [excelData, setExcelData]=useState(null); 
    const fileType=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    const anotherFileType = ['application/vnd.ms-excel'];
    useEffect(()=>{
      getProduct()
      // getData()
    }, [])
    const getProduct = async () =>{
         const res = await axios.get(URI,  {
           headers:{"Authorization": `Bearer ${token}` }
         })
         const {message, name} = res.data 
         if(message === 'permitido'){
           
         } else {
          const action = {
            type: TYPES.login,
            payload:{...user,putProduct:'denegado',name }
          }
          dispach(action)
           navigate('/home')
         }
     }

    const handleFile = (e)=>{
      let excelFile = null
        let selectedFile = e.target.files[0];
        if(selectedFile){
          if(anotherFileType.includes(selectedFile.type)  || fileType.includes(selectedFile.type)){
            let reader = new FileReader();
            reader.readAsArrayBuffer(selectedFile);
            reader.onload=(e)=>{
              setExcelFileError(null);
              excelFile = e.target.result
              if(excelFile!==null){
                      const workbook = XLSX.read(excelFile,{type:'buffer'});
                      const worksheetName = workbook.SheetNames[0];
                      const worksheet=workbook.Sheets[worksheetName];
                      const data = XLSX.utils.sheet_to_json(worksheet);
                      setExcelData(data);}
            } 
          }
          else{
            setExcelFileError('Please select only excel file types');
            
          }
        }
        else{
          console.log('plz select your file');
        }
      }
      const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(excelData)
        if ( excelData ){
        excelData.forEach( async(product) => {
          let {nameProduct, categProduct, stockProduct, priceProduct,tallaProduct} ={
              nameProduct: product.nameProduct,
              categProduct: product.categProduct,
              stockProduct: product.stockProduct,
              priceProduct: product.priceProduct,
              tallaProduct: product.tallaProduct
          }
          await axios.post(URI ,{nameProduct, categProduct, stockProduct, priceProduct,tallaProduct})
          Swal.fire({
            title:'Se han ingresado los datos'
          })
          navigate('/home/allProduct')
        } 
        )
      }
      }
  return (
  
    <>
         <div>
<HeaderComp/>
<div className="container-fluid ">
  <div className="row container_Dash">
 <NavScreen/>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <h1> New Product </h1>
      <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 ">
      <form className='form-group' autoComplete="off"
        onSubmit={handleSubmit}>
          <label><h5>Upload Excel file</h5></label>
          <br></br>
          <input type='file' className='form-control'
          onChange={handleFile} required></input>                  
          {excelFileError&&<div className='text-danger'
          style={{marginTop:5+'px'}}>{excelFileError}</div>}
          <button type='submit' className='btn btn-success'
          style={{marginTop:5+'px'}}>Submit</button>
        </form>
      </div> 
    </main>
  </div>
</div>
    </div>
    </>
  )
  
}
