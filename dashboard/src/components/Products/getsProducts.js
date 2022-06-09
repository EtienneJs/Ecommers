import axios from 'axios'
const URI ='http://localhost:8000/dashboard/getProducts'


export const getProducts = async (filter, name, token) =>{
    const res = await axios.get(URI,  {
        headers:{"Authorization": `Bearer ${token}` }
    }) 
    const resData= res.data.products
    if(filter === 'descripcion'){ 
            if(name === ''){
                return [resData]
            }
            name= name.toLowerCase();
            
           return  resData.filter(hero => hero.descripcion.toLowerCase().includes(name))
        
    } else if (filter === 'id_categorias') {
            if(name === ''){
                return [resData]
            }

            name = parseInt(name)
           return  resData.filter(hero => hero.id_categorias === name)
        
    } else if (filter === 'talla') { 
        if(name === ''){
            return [resData]
        }
        name= name.toLowerCase();
       return  resData.filter(hero => hero.talla.toLowerCase().includes(name))
    
}
else if (filter === 'stockProduct') {
    if(name === ''){
        return [resData]
    }
    name = parseInt(name)
   return  resData.filter(hero => hero.stock.includes(name))

}
else if (filter === 'priceProduct') {
    if(name === ''){
        return [resData]
    }
   return  resData.filter(hero => hero.precio.includes(name))

}
else if (filter === 'id_proveedor') {
    if(name === ''){
        return [resData]
    }
    name = parseInt(name)
   return  resData.filter(hero => hero.id_proveedor === name)

}
}
