import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const URI ='http://localhost:8000/blogs/'


export const EditBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()

    const update = async(e) =>{
        e.preventDefault()
        await axios.put(URI+id, {
            title: title,
            content: content
        })
        navigate('/')
    }

    useEffect(()=>{
            getBlogById()
    },[])

    const getBlogById = async () =>{
        const res = await axios.get(URI+id)
        console.log()
        setTitle(res.data[0].title)
        setContent(res.data[0].content)
    }
  return (
    <div>

    <h1>Edit Post</h1>
      <form onSubmit={update}>
          <div className="mb-3">
              <label className="form-label">Title</label>
              <input
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
              type='text'
              className="form-control"
              />
              </div>
              <div className="mb-3">
              <label className="form-label">Content</label>
              <textarea
              value={content}
              onChange={(e)=> setContent(e.target.value)}
              type='text'
              className="form-control"
              />
          </div>

          <button className="btn btn-outline-primary">Save</button>
      </form>
    </div>
  )
}



