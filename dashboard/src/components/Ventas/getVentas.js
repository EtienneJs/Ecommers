import axios from 'axios'
const URI ='http://localhost:8000/dashboard/getVentas'


export const getVentas = async (filter, name,token) =>{
    const res = await axios.get(URI,  {
        headers:{"Authorization": `Bearer ${token}` }
      }) 
      const resData= res.data.ventas
      if(filter === 'id_facturas'){ 
            if(name === ''){
                return [resData]
            }
            name= parseInt(name)
           return  resData.filter(element => element.id_facturas === name)
        
    } else if (filter === 'id_productos') {
            if(name === ''){
                return [resData]
            }
            name= parseInt(name)
           return  resData.filter(hero => hero.id_productos===name)
        
    } else if (filter === 'CU') { 
        if(name === ''){
            return [resData]
        }
        name= name.toLowerCase();
       return  resData.filter(hero => hero.CU.toLowerCase().includes(name))
    
}
else if (filter === 'Precio') { 
    if(name === ''){
        return [resData]
    }
    name= name.toLowerCase();
   return  resData.filter(hero => hero.Precio.toLowerCase().includes(name))

}

}
