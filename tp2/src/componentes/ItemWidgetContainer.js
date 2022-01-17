import React, {useContext, useState} from 'react';
import { CarritoContext } from "../context/CarritoContext";



function ItemWidgetContainer() {
    const {carrito, removeProducto, subtotal}=useContext(CarritoContext)
    const [contador, setContador]=useState(1)
    /* const [productos, setProductos]=useState([carrito]) */
    //console.log(carrito)
    

    return (
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <h1 className="tituloCarrito">CARRITO</h1>
                    </div>
                    <div className="col"></div>
                </div>
            <div>
                {carrito.map((productos)=>{
                    //console.log(productos.nombre)
                    return(
                        <>
                        <div key={productos.id}>
                            <h1> {productos.nombre} </h1>
                            <h3> ${productos.precio} </h3>
                            <h6> ID:{productos.id}</h6>
                            <div>
                                <button id={productos.id} onClick={()=>removeProducto(productos.id)} >ELIMINAR</button>
                            </div>
                            <div>
                                {/* CONTADORES */}
                                <button onClick={()=>setContador(contador + 1)}> + </button>
                                <p>cantidad:{contador}</p>
                                <button onClick={()=>setContador(contador - 1)}> + </button>
                            </div>
                            <div>
                                <p> subtotal: subtotal()</p>
                            </div>
                        </div>
                        </>
                    )
                    
                })}
            </div>
         
        </div>
    );
}

export default ItemWidgetContainer;