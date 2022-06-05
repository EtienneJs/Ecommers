export const orderBy = (arrays, type, order, nameFilter) =>{
    if( type === 'string' ){
        if(nameFilter === 'nameProduct'){
            if(order === 'top'){
            return arrays.sort( (a, b)=> (a.nameProduct > b.nameProduct) && 1)
        } else {
            return arrays.sort( (a, b)=> (a.nameProduct < b.nameProduct) && 1)
        }
       } else if(nameFilter === 'categProduct'){
        if(order === 'top'){
            return arrays.sort( (a, b)=> (a.categProduct > b.categProduct) && 1)
        } else {
            return arrays.sort( (a, b)=> (a.categProduct < b.categProduct) && 1)
        }
       } else if(nameFilter === 'tallaProduct'){
        if(order === 'top'){
            return arrays.sort( (a, b)=> (a.tallaProduct > b.tallaProduct) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.tallaProduct < b.tallaProduct) ? 1 : -1)
        }
       }
    } else if( type === 'number' ){
           if(nameFilter === 'stockProduct'){
            if(order === 'top'){
                return arrays.sort( (a, b)=> (b.stockProduct - a.stockProduct))
            } else {
                return arrays.sort( (a, b)=> (a.stockProduct - b.stockProduct))
            }
           } else if(nameFilter === 'priceProduct'){
            if(order === 'top'){
                return arrays.sort( (a, b)=> (b.priceProduct - a.priceProduct))
            } else {
                return arrays.sort( (a, b)=> (a.priceProduct - b.priceProduct))
            }
           }
    }
} 