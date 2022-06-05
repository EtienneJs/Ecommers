import express from 'express'
import { createBlog, delBlog, getAllBlogs, getOneBlog, updateBlog } from '../controller/BlogController.js'

const router = express.Router()

 router.get('/', getAllBlogs)

 router.get('/:id', getOneBlog)
 router.post('/', createBlog)
 router.put('/:id', updateBlog)
 router.delete('/:id', delBlog)

export default router