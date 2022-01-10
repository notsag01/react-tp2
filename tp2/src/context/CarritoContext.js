import React, {createContext, useState} from 'react';

export const CarritoContext =createContext();

export const CarritoContextProvider=({children})=>{
    const[carrito, setCarrito]=useState([])

    const addProductoCarrito=(nombre, precio,id)=>{
        setCarrito([...carrito, {nombre,precio,id}])
    }


    return(
        <CarritoContext.Provider value={{carrito, addProductoCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}

