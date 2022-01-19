import React, {createContext, useState} from 'react';

export const CarritoContext =createContext();

export const CarritoContextProvider=({children})=>{
    const[carrito, setCarrito]=useState([])
    const [contador, setContador]=useState(1)


    /* FUNCION PARA AGREGAR AL CARRITO CON LA VERIFICACION DE QUE NO SE REPITAN */
    const addProductoCarrito=(nombre, precio,id)=>{

        const setAddProducto= carrito.find((producto)=>producto.id === id)

        if(setAddProducto === undefined){
            setCarrito([...carrito, {nombre,precio,id}])
        }else{
           setContador(contador+1)
        }
    }

    /* FUNCION PARA REMOVER UN PRODUCTO DEL CARRITO */
    const removeProducto=(id)=>{
        const setRemove=carrito.filter((producto)=>producto.id!== id)
        setCarrito(setRemove)
    }
    /* AUMENTA CONTADOR  */
    const aumentarContador=()=>{
        setContador(contador+1)
    }
    /* DISMINUYE CONTADOR */
    const disminuyeContador=()=>{
        setContador(contador-1)
    }


    /*  */
    const subtotal=()=>{
        return carrito.reduce((precio, curr)=> precio  + curr.precio , 0)
    }
    

    return(
        <CarritoContext.Provider value={{
        carrito,
        addProductoCarrito, 
        removeProducto,
        subtotal,
        contador,
        aumentarContador,
        disminuyeContador,
        }}>
            {children}
        </CarritoContext.Provider>
    )
}

