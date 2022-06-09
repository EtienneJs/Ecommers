export const orderByVentas = (arrays, type, order, nameFilter) =>{
    if( type === 'string' ){
        if(nameFilter === 'Precio'){
            if(order === 'top'){
            return arrays.sort( (a, b)=> (a.Precio > b.Precio) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.Precio < b.Precio)  ? 1 : -1)
        }
       } 
       else if(nameFilter === 'CU'){
        if(order === 'top'){
            return arrays.sort( (a, b)=> (a.CU > b.CU) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.CU < b.CU) ? 1 : -1)
        }
       } 
    } else if (type ==='number'){
        if(nameFilter === 'id_facturas'){
            if(order === 'top'){
            return arrays.sort( (a, b)=> (a.id_facturas > b.id_facturas) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.id_facturas < b.id_facturas)  ? 1 : -1)
        }
       } 
       else  if(nameFilter === 'id_productos'){
        if(order === 'top'){
        return arrays.sort( (a, b)=> (a.id_productos > b.id_productos) ? 1 : -1)
    } else {
        return arrays.sort( (a, b)=> (a.id_productos < b.id_productos)  ? 1 : -1)
    }
   } 
    }
} 