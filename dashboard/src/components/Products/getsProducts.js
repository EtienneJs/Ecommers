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
            
           return  resData.filter(hero => hero.nameProduct.toLowerCase().includes(name))
        
    } else if (filter === 'categProduct') {
            if(name === ''){
                return []
            }
            name= name.toLowerCase();
           return  resData.filter(hero => hero.categProduct.toLowerCase().includes(name))
        
    } else if (filter === 'tallaProduct') { 
        if(name === ''){
            return []
        }
        name= name.toLowerCase();
       return  resData.filter(hero => hero.tallaProduct.toLowerCase().includes(name))
    
}
else if (filter === 'stockProduct') {
    if(name === ''){
        return []
    }
    name = parseInt(name)
   return  resData.filter(hero => hero.stockProduct.includes(name))

}
else if (filter === 'priceProduct') {
    if(name === ''){
        return []
    }
   return  resData.filter(hero => hero.priceProduct.includes(name))

}
}
