export const orderByFacturas = (arrays, type, order, nameFilter) =>{
    if( type === 'number' ){
        if(nameFilter === 'Usersid'){
            if(order === 'top'){
            return arrays.sort( (a, b)=> (a.Usersid > b.Usersid) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.Usersid < b.Usersid)  ? 1 : -1)
        }
       } 
    }
} 