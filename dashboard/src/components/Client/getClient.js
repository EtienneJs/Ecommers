import axios from 'axios'
const URI ='http://localhost:8000/dashboard/getClient'


export const getClient = async (filter, name, token) =>{
    const res = await axios.get(URI,  {
        headers:{"Authorization": `Bearer ${token}` }
      }) 
    const resData= res.data.client
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
        
    }

}
