import axios from 'axios'
const URI ='http://localhost:8000/dashboard/getprovedores'


export const getOrders = async (filter, name,token) =>{
    const res = await axios.get(URI,  {
        headers:{"Authorization": `Bearer ${token}` }
      }) 
      const resData= res.data.proveedores
      if(filter === 'nombre'){ 
            if(name === ''){
                return [resData]
            }
            name= name.toLowerCase();
           return  resData.filter(hero => hero.nombre.toLowerCase().includes(name))
        
    } else if (filter === 'direccion') {
            if(name === ''){
                return [resData]
            }
            name= name.toLowerCase();
           return  resData.filter(hero => hero.direccion.toLowerCase().includes(name))
        
    } else if (filter === 'telefono') { 
        if(name === ''){
            return [resData]
        }
        name= name.toLowerCase();
       return  resData.filter(hero => hero.telefono.toLowerCase().includes(name))
    
}

}
