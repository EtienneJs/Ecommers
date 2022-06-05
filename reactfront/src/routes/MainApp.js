import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateBlog } from '../blog/CreateBlog'
import { EditBlog } from '../blog/EditBlog'
import { CompShowBlogs } from '../blog/ShowBlogs'


export const MainRoute = () => {
  return (
      <>
    <Routes>
                <Route path='/' element={<CompShowBlogs/>}/>
                <Route path='/create' element={<CreateBlog/>}/>
                <Route path='/edit/:id' element={<EditBlog/>} />
  
    </Routes>
      </>
  )
}
