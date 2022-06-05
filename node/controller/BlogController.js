import { BlogModel } from "../models/BlogModel.js"; 

//Metodo para el CRUD - Acciones----

//Mostrar todoslos registros

export const getAllBlogs = async (req, res) =>{
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }

}

//Mostrar un registro

export const getOneBlog =async (req, res) =>{
  try {
    const blog = await BlogModel.findAll({
        where:{
            id:req.params.id
        }
    })
    res.json(blog)
  } catch (error) {
    res.json({message: error.message})
  }
}

//Crear un registro


export const createBlog = async (req, res)=>{
      try {
        await BlogModel.create(req.body)
        res.json({
            'message': 'Registro creado Correctamente'
        })
      } catch (error) {
        res.json({message: error.message})
      }
    }


//Actualizar un registro

export const updateBlog = async(req, res)=>{
    try {
       await BlogModel.update(req.body,{
            where: {id: req.params.id}
        })
        res.json({
            'message': 'Registro actualizado Correctamente' 
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Eliminar un registro

export const delBlog = async(req, res)=>{
    try {
        BlogModel.destroy({
            where:{id:req.params.id}
        })
        res.json({
            'message': 'Registro borrado Correctamente' 
        })
    } catch (error) {
        res.json({message: error.message})
    }
}