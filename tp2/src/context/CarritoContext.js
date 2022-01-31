import React, {createContext, useState} from 'react';


export const CarritoContext =createContext();

export const CarritoContextProvider=({children})=>{
    const[carrito, setCarrito]=useState([])
    const [contador, setContador]=useState(1)
    const [nuevaCompra, setNuevaCompra]=useState({})

//console.log(carrito)

    /* FUNCION PARA AGREGAR AL CARRITO CON LA VERIFICACION DE QUE NO SE REPITAN */
    const addProductoCarrito=(nombre, precio,id, cont, imagen)=>{

        const setAddProducto= carrito.find((producto)=>producto.id === id)

        if(setAddProducto === undefined){
            setCarrito([...carrito, {nombre,precio,id, cantidad:cont, imagen}])
        }else{
            setAddProducto.cantidad +=cont
            setCarrito([...carrito])
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
    const detalleCompra=(comprador, items)=>{
        setNuevaCompra(...nuevaCompra, {comprador, items})
        
    }


    /*  */
    const precioTotal=()=>{
        return carrito.reduce((precio, curr)=> precio  + curr.precio*curr.cantidad , 0)
    }

    const totalItems=()=>{
        return carrito.reduce((acc, curr)=> acc + curr.cantidad ,0 )
    }

    const clearCarrito=()=>{
        setCarrito([])
    }


    return(
        <CarritoContext.Provider value={{
        carrito,
        addProductoCarrito, 
        removeProducto,
        precioTotal,
        contador,
        aumentarContador,
        disminuyeContador,
        totalItems,
        detalleCompra,
        clearCarrito,
        }}>
            {children}
        </CarritoContext.Provider>
    )
}

