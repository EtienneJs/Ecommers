export const orderByCategorias = (arrays, type, order, nameFilter) =>{
    if( type === 'string' ){
        if(nameFilter === 'descripcion'){
            if(order === 'top'){
            return arrays.sort( (a, b)=> (a.descripcion > b.descripcion) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.descripcion < b.descripcion)  ? 1 : -1)
        }
       } else if(nameFilter === 'createdAt'){
        if(order === 'top'){
            return arrays.sort( (a, b)=> (a.createdAt > b.createdAt) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.createdAt < b.createdAt) ? 1 : -1)
        }
       } else if(nameFilter === 'updatedAt'){
        if(order === 'top'){
            return arrays.sort( (a, b)=> (a.updatedAt > b.updatedAt) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.updatedAt < b.updatedAt) ? 1 : -1)
        }
       }
    } 
} 