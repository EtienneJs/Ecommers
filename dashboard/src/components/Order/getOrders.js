import axios from 'axios'
const URI ='http://localhost:8000/dashboard/getOrders'


export const getOrders = async (filter, name,token) =>{
    const res = await axios.get(URI,  {
        headers:{"Authorization": `Bearer ${token}` }
      }) 
    const resData= res.data
    if(filter === 'nombreUser'){ 
            if(name === ''){
                return []
            }
            name= name.toLowerCase();
           return  resData.filter(hero => hero.nombreUser.toLowerCase().includes(name))
        
    } else if (filter === 'apellidoUser') {
            if(name === ''){
                return []
            }
            name= name.toLowerCase();
           return  resData.filter(hero => hero.apellidoUser.toLowerCase().includes(name))
        
    } else if (filter === 'nombreProductsShop') { 
        if(name === ''){
            return []
        }
        name= name.toLowerCase();
       return  resData.filter(hero => hero.nombreProductsShop.toLowerCase().includes(name))
    
}
else if (filter === 'total') {
    if(name === ''){
        return []
    }
    name = parseInt(name)
   return  resData.filter(hero => hero.total.includes(name))

}

}
