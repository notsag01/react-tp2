import React, {createContext, useState} from 'react';

export const CarritoContext =createContext();

export const CarritoContextProvider=({children})=>{
    const[carrito, setCarrito]=useState([])

    const addProductoCarrito=(nombre, precio,id)=>{

        const setAddProducto= carrito.find((producto)=>producto.id === id)

        if(setAddProducto === undefined){
            setCarrito([...carrito, {nombre,precio,id}])
        }else{
            alert("Hola")
        }



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

