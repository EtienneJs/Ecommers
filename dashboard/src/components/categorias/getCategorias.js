import axios from 'axios'
const URI ='http://localhost:8000/dashboard/getCategorias'


export const getCategorias = async (filter, name,token) =>{
    const res = await axios.get(URI,  {
        headers:{"Authorization": `Bearer ${token}` }
      }) 
      const resData= res.data.categorias
      if(filter === 'descripcion'){ 
            if(name === ''){
                return [resData]
            }
            name= name.toLowerCase();
           return  resData.filter(hero => hero.descripcion.toLowerCase().includes(name))
        
    } else if (filter === 'createdAt') {
            if(name === ''){
                return [resData]
            }
            name= name.toLowerCase();
           return  resData.filter(hero => hero.createdAt.toLowerCase().includes(name))
        
    } else if (filter === 'updatedAt') { 
        if(name === ''){
            return [resData]
        }
        name= name.toLowerCase();
       return  resData.filter(hero => hero.updatedAt.toLowerCase().includes(name))
    
}

}
