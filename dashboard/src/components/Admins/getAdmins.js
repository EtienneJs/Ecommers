import axios from 'axios'
const URI ='http://localhost:8000/dashboard/getAdmin'


export const getAdmin = async (filter, name,token) =>{
    
  
    const res = await axios.get(URI,  {
        headers:{"Authorization": `Bearer ${token}` }
      }) 
    const resData= res.data.Admins
    if(filter === 'name'){ 
            if(name === ''){
                return resData
            }
            name= name.toLowerCase();
           return  resData.filter(hero => hero.name.toLowerCase().includes(name))
        
    } else if (filter === 'mail') {
            if(name === ''){
                return resData
            }
            name= name.toLowerCase();
           return  resData.filter(hero => hero.mail.toLowerCase().includes(name))
        
    } else if (filter === 'cell') { 
        if(name === ''){
            return resData
        }
        name= name.toLowerCase();
       return  resData.filter(hero => hero.cell.toLowerCase().includes(name))
    
}
else if (filter === 'direction') { 
    if(name === ''){
        return resData
    }
    name= name.toLowerCase();
   return  resData.filter(hero => hero.direction.toLowerCase().includes(name))

}
else if (filter === 'editProduct') {
    if(name === ''){
        return resData
    }
    name= name.toLowerCase();
   return  resData.filter(hero => hero.editProduct.includes(name))

}
else if (filter === 'putProduct') {
    if(name === ''){
        return resData
    }
    name= name.toLowerCase();
   return  resData.filter(hero => hero.putProduct.includes(name))

}
else if (filter === 'editUsers') {
    if(name === ''){
        return resData
    }
    name= name.toLowerCase();
   return  resData.filter(hero => hero.editUsers.includes(name))

}
else if (filter === 'proveedoresEdit') {
    if(name === ''){
        return resData
    }
    name= name.toLowerCase();
   return  resData.filter(hero => hero.proveedoresEdit.includes(name))

}
else if (filter === 'proveedoresPut') {
    if(name === ''){
        return resData
    }
    name= name.toLowerCase();
   return  resData.filter(hero => hero.proveedoresEdit.includes(name))

}else if (filter === 'editVentas') {
    if(name === ''){
        return resData
    }
    name= name.toLowerCase();
   return  resData.filter(hero => hero.editVentas.includes(name))

}
else if (filter === 'putVentas') {
    if(name === ''){
        return resData
    }
    name= name.toLowerCase();
   return  resData.filter(hero => hero.putVentas.includes(name))

}
else if (filter === 'editFacturas') {
    if(name === ''){
        return resData
    }
    name= name.toLowerCase();
   return  resData.filter(hero => hero.editFacturas.includes(name))

}
else if (filter === 'putFacturas') {
    if(name === ''){
        return resData
    }
    name= name.toLowerCase();
   return  resData.filter(hero => hero.putFacturas.includes(name))

}
else if (filter === 'editCategorias') {
    if(name === ''){
        return resData
    }
    name= name.toLowerCase();
   return  resData.filter(hero => hero.editCategorias.includes(name))

}
else if (filter === 'putCategorias') {
    if(name === ''){
        return resData
    }
    name= name.toLowerCase();
   return  resData.filter(hero => hero.putCategorias.includes(name))

}

}