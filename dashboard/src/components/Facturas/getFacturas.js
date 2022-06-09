import axios from 'axios'
const URI ='http://localhost:8000/dashboard/getFacturas'


export const getFacturas = async (filter, name,token) =>{
    const res = await axios.get(URI,  {
        headers:{"Authorization": `Bearer ${token}` }
      }) 
      const resData= res.data.facturas
      if(filter === 'Usersid'){ 
            if(name === ''){
                return [resData]
            }
            name  = parseInt(name)
           const data =  resData.filter(hero => hero.Usersid === name)
           return data
        
    } 
   

}
