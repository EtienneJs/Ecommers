import axios from 'axios'
const URI ='http://localhost:8000/dashboard/getProducts'


export const getProducts = async (filter, name, token) =>{
    const res = await axios.get(URI,  {
        headers:{"Authorization": `Bearer ${token}` }
    }) 
    const resData= res.data.products
    
    if(filter === 'nameProduct'){ 
            if(name === ''){
                return []
            }
            name= name.toLowerCase();
            
           return  resData.filter(hero => hero.descripcion.toLowerCase().includes(name))
        
    } else if (filter === 'categProduct') {
            if(name === ''){
                return []
            }
            name= name.toLowerCase();
           return  resData.filter(hero => hero.id_categorias.toLowerCase().includes(name))
        
    } else if (filter === 'tallaProduct') { 
        if(name === ''){
            return []
        }
        name= name.toLowerCase();
       return  resData.filter(hero => hero.talla.toLowerCase().includes(name))
    
}
else if (filter === 'stockProduct') {
    if(name === ''){
        return []
    }
    name = parseInt(name)
   return  resData.filter(hero => hero.stock.includes(name))

}
else if (filter === 'priceProduct') {
    if(name === ''){
        return []
    }
   return  resData.filter(hero => hero.precio.includes(name))

}
else if (filter === 'proveedorProduct') {
    if(name === ''){
        return []
    }
   return  resData.filter(hero => hero.id_proveedor.includes(name))

}
}
