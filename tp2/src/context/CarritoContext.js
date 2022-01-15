import React, {createContext, useState} from 'react';

export const CarritoContext =createContext();

export const CarritoContextProvider=({children})=>{
    const[carrito, setCarrito]=useState([])

    const addProductoCarrito=(nombre, precio,id)=>{
        setCarrito([...carrito, {nombre,precio,id}])
    }

    const removeProducto=(id)=>{
        const setRemove=carrito.filter((producto)=>producto.id!== id)
        setCarrito(setRemove)
    }


    return(
        <CarritoContext.Provider value={{carrito, addProductoCarrito, removeProducto}}>
            {children}
        </CarritoContext.Provider>
    )
}

