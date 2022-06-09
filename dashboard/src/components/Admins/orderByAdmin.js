export const orderByAdmin = (arrays, type, order, nameFilter) =>{
    if( type === 'string' ){
        if(nameFilter === 'name'){
            if(order === 'top'){
            return arrays.sort( (a, b)=> (a.name > b.name) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.name < b.name) ? 1 : -1)
        }
       } else if(nameFilter === 'mail'){
        if(order === 'top'){
            return arrays.sort( (a, b)=> (a.mail > b.mail) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.mail < b.mail) ? 1 : -1)
        }
       } else if(nameFilter === 'cell'){
        if(order === 'top'){
            return arrays.sort( (a, b)=> (a.cell > b.cell) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.cell < b.cell) ? 1 : -1)
        } 
       }
       else if(nameFilter === 'direction'){
        if(order === 'top'){
            return arrays.sort( (a, b)=> (a.direction > b.direction) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.direction < b.direction) ? 1 : -1)
        } 
       }
       
    } else if( type === 'number' ){
           if(nameFilter === 'stockProduct'){
            if(order === 'top'){
                return arrays.sort( (a, b)=> (b.stock - a.stock))
            } else {
                return arrays.sort( (a, b)=> (a.stock - b.stock))
            }
           } else if(nameFilter === 'priceProduct'){
            if(order === 'top'){
                return arrays.sort( (a, b)=> (b.precio - a.precio))
            } else {
                return arrays.sort( (a, b)=> (a.precio - b.precio))
            }
           }
    }
} 