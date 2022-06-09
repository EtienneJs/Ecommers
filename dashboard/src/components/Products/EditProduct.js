import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

// /edit/:id
const URI = 'http://localhost:8000/dashboard/edit/'

const EditProduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [Product, setProduct] = useState({
        descripcion:'',
        talla:'',
        stock:'',
        precio:'',
        id_categorias:0,
        id_proveedor:0
    })
    const { descripcion,talla,stock,precio,id_categorias,id_proveedor  } = Product


    const update = async(e) =>{
        e.preventDefault()
        await axios.put(`${URI}${id}`, {
            descripcion,talla,stock,precio,id_categorias,id_proveedor
        })
        navigate('/home/allProduct')
    }
    
    useEffect(()=>{
        getBlogById()
},[])

    const getBlogById = async () =>{
        const res = await axios.get(URI+id)
        const {descripcion,talla,stock,precio,id_categorias,id_proveedor} = res.data[0]
        setProduct({
            descripcion,talla,stock,precio,id_categorias,id_proveedor
        })
    }
    const handleChange = (e) =>{
        setProduct({
            ...Product,
            [e.target.name]:e.target.value
        })
    }
  return (
    <div  className="d-flex flex-column justify-content-center align-items-center vh-100">

        
    <h1>Edit Product</h1>
      <form onSubmit={update}>
          <div className="mb-3">
              <label className="form-label">Name</label>
              <input
              value={descripcion}
              name='descripcion'
              onChange={handleChange}
              type='text'
              className="form-control"
              />
              </div>
              <div className="mb-3">
              <label className="form-label">Categoria</label>
              <input
              value={id_categorias}
              name='id_categorias'
              onChange={handleChange}
              type='text'
              className="form-control"
              />
                 <label className="form-label">Talla</label>
              <input
              value={talla}
              name='talla'
              onChange={handleChange}
              type='text'
              className="form-control"
              />
              </div>
              <div className="mb-3">
              <label className="form-label">Stock</label>
              <input
              value={stock}
              name='stock'
              onChange={handleChange}
              type='text'
              className="form-control"
              />
          </div>
          <div className="mb-3">
              <label className="form-label">Provedor</label>
              <input
              value={id_proveedor}
              name='id_proveedor'
              onChange={handleChange}
              type='number'
              className="form-control"
              />
          </div>
          <div className="mb-3">
              <label className="form-label">precio</label>
              <input
              value={precio}
              name='precio'
              onChange={handleChange}
              type='text'
              className="form-control"
              />
          </div>

          <button className="btn btn-outline-primary">Save</button>
      </form>
    </div>
    
  )
}

export default EditProduct