import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI ='http://localhost:8000/blogs/'



export const CreateBlog = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    //procedimiento de guardar
    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI, {title, content})
        navigate('/')
    }

  return (
    <>
      <h1>Create Post</h1>
      <form onSubmit={store}>
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
    </>
  )
}
