export const orderByOrders = (arrays, type, order, nameFilter) =>{
    if( type === 'string' ){
        if(nameFilter === 'nombreUser'){
            if(order === 'top'){
            return arrays.sort( (a, b)=> (a.nombreUser > b.nombreUser) && 1)
        } else {
            return arrays.sort( (a, b)=> (a.nombreUser < b.nombreUser) && 1)
        }
       } else if(nameFilter === 'apellidoUser'){
        if(order === 'top'){
            return arrays.sort( (a, b)=> (a.apellidoUser > b.apellidoUser) && 1)
        } else {
            return arrays.sort( (a, b)=> (a.apellidoUser < b.apellidoUser) && 1)
        }
       } else if(nameFilter === 'nombreProductsShops'){
        if(order === 'top'){
            return arrays.sort( (a, b)=> (a.nombreProductsShops > b.nombreProductsShops) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.nombreProductsShops < b.nombreProductsShops) ? 1 : -1)
        }
       }
    } else if( type === 'number' ){
           if(nameFilter === 'total'){
            if(order === 'top'){
                return arrays.sort( (a, b)=> (b.total - a.total))
            } else {
                return arrays.sort( (a, b)=> (a.total - b.total))
            }
           } 
    }
} 