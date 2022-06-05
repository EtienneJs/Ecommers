import axios from 'axios'
import '../blog/styleBlog.css'

import {useState, useEffect, useContext } from 'react'
import Cookies from 'universal-cookie'
import * as XLSX from 'xlsx'
import { Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'
import { TYPES } from '../auth/types/TYPES'
import Swal from 'sweetalert2'
const URI ='http://localhost:8000/blogs/'


export const CompShowBlogs= () =>{
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState([])
    //change state
    const [excelFile, setExcelFile]=useState(null);
     const [excelFileError, setExcelFileError]=useState(null);  
 // submit
 const [excelData, setExcelData]=useState(null);
//Handle file
const fileType=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
const anotherFileType = ['application/vnd.ms-excel'];
 const handleFile = (e)=>{
    let selectedFile = e.target.files[0];
    console.log(selectedFile.type)
    if(selectedFile){
      if(anotherFileType.includes(selectedFile.type)  || fileType.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFileError(null);
          setExcelFile(e.target.result);
        } 
      }
      else{
        setExcelFileError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else{
      console.log('plz select your file');
    }
  }
  // submit function
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
      console.log(data)
    }
    else{
      setExcelData(null);
    }
  }
const {dispach, user} = useContext(AuthContext)

    useEffect(()=>{
        getBlogs()
    }, [])
//Mostrar todos los campos
const getBlogs = async()=>{
    const res = await axios.get(URI)
    setBlogs(res.data)
}
//Eliminar un los campos

const delBlogs = async(id)=>{
    await axios.delete(`${URI}${id}`)
    getBlogs()
}

const handleLogout = () =>{
  
      Swal.fire({
          title: 'Ha cerrado sesion'
      })
      dispach({
          type: TYPES.logout
      })
    const cookie = new Cookies()
    cookie.remove('check')

    navigate('/login')
}


return (
    <div className='container-Show'>
        <button onClick={handleLogout} className='btn btn-outline-danger'>Logout</button>
        <div className='form'>
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
        <div className='row'>
            <div className='col container-ShowBlogs'>
        <h1 className='text-white'> {user.name} </h1>
                <Link to='/create' className='btn btn-outline-primary m-5'><i className="fa-solid fa-plus"></i></Link>
                <table className='table text-white w-50'>
                    <thead className='table-primary'>
                        <tr>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs.map((blog)=>(
                                <tr key={blog.id}> 
                                    <td>{blog.title}</td>
                                    <td>{blog.content}</td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=> delBlogs(blog.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
    </div>
)
}