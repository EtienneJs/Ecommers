export const orderBy = (arrays, type, order, nameFilter) =>{
    if( type === 'string' ){
        if(nameFilter === 'descripcion'){
            if(order === 'top'){
            return arrays.sort( (a, b)=> (a.descripcion > b.descripcion) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.descripcion < b.descripcion) ? 1 : -1)
        }
       } else if(nameFilter === 'talla'){
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
           }
           else if(nameFilter === 'id_categorias'){
            if(order === 'top'){
                return arrays.sort( (a, b)=> (a.id_categorias > b.id_categorias)? 1 : -1)
            } else {
                return arrays.sort( (a, b)=> (a.id_categorias < b.id_categorias)? 1 : -1)
            }
           }else if(nameFilter === 'id_proveedor'){
            if(order === 'top'){
                return arrays.sort( (a, b)=> (a.id_proveedor > b.id_proveedor)? 1 : -1)
            } else {
                return arrays.sort( (a, b)=> (a.id_proveedor < b.id_proveedor)? 1 : -1)
            }
           }
            else if(nameFilter === 'priceProduct'){
            if(order === 'top'){
                return arrays.sort( (a, b)=> (b.precio - a.precio))
            } else {
                return arrays.sort( (a, b)=> (a.precio - b.precio))
            }
           }
    }
} 