export const orderByOrders = (arrays, type, order, nameFilter) =>{
    if( type === 'string' ){
        if(nameFilter === 'nombre'){
            if(order === 'top'){
            return arrays.sort( (a, b)=> (a.nombre > b.nombre) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.nombre < b.nombre)  ? 1 : -1)
        }
       } else if(nameFilter === 'direccion'){
        if(order === 'top'){
            return arrays.sort( (a, b)=> (a.direccion > b.direccion) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.direccion < b.direccion) ? 1 : -1)
        }
       } else if(nameFilter === 'telefono'){
        if(order === 'top'){
            return arrays.sort( (a, b)=> (a.telefono > b.telefono) ? 1 : -1)
        } else {
            return arrays.sort( (a, b)=> (a.telefono < b.telefono) ? 1 : -1)
        }
       }
    } 
} 