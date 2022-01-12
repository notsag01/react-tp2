import React, {createContext, useState} from 'react';

export const CarritoContext =createContext();

export const CarritoContextProvider=({children})=>{
    const[carrito, setCarrito]=useState([])
    //const [itemName, setItemName]=useState("")

    const addProductoCarrito=(producto)=>{
        setCarrito([...carrito, {producto}])
    }


    return(
        <CarritoContext.Provider value={{carrito, addProductoCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}

