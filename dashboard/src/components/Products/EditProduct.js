import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

// /edit/:id
const URI = 'http://localhost:8000/dashboard/edit/'

const EditProduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [Product, setProduct] = useState({
        nombre:'',
        categoria:'',
        talla:'',
        stock:'',
        price:''
    })
    const { nombre,categoria,talla,stock,price  } = Product


    const update = async(e) =>{
        e.preventDefault()
        await axios.put(`${URI}${id}`, {
            nameProduct: nombre,
            categProduct: categoria,
            tallaProduct: talla,
            stockProduct: stock,
            priceProduct: price
        })
        navigate('/home/allProduct')
    }
    
    useEffect(()=>{
        getBlogById()
},[])

    const getBlogById = async () =>{
        const res = await axios.get(URI+id)
        const {nameProduct, categProduct, tallaProduct,stockProduct,priceProduct} = res.data[0]
        setProduct({
        nombre:nameProduct,
        categoria:categProduct,
        talla:tallaProduct,
        stock:stockProduct,
        price:priceProduct
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
              value={nombre}
              name='nombre'
              onChange={handleChange}
              type='text'
              className="form-control"
              />
              </div>
              <div className="mb-3">
              <label className="form-label">Categoria</label>
              <input
              value={categoria}
              name='categoria'
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
              <label className="form-label">Price</label>
              <input
              value={price}
              name='price'
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