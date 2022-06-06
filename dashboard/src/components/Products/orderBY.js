export const orderBy = (arrays, type, order, nameFilter) =>{
    if( type === 'string' ){
        if(nameFilter === 'nameProduct'){
            if(order === 'top'){
            return arrays.sort( (a, b)=> (a.descripcion > b.descripcion) && 1)
        } else {
            return arrays.sort( (a, b)=> (a.descripcion < b.descripcion) && 1)
        }
       } else if(nameFilter === 'categProduct'){
        if(order === 'top'){
            return arrays.sort( (a, b)=> (a.id_categorias > b.id_categorias) && 1)
        } else {
            return arrays.sort( (a, b)=> (a.id_categorias < b.id_categorias) && 1)
        }
       } else if(nameFilter === 'tallaProduct'){
        if(order === 'top'){
            return arrays.sort( (a, b)=> (a.talla > b.talla) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.talla < b.talla) ? 1 : -1)
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