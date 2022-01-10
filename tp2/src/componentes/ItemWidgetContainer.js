import React, {useContext, useState} from 'react';
import { CarritoContext } from "../context/CarritoContext";



function ItemWidgetContainer() {
    const {carrito}=useContext(CarritoContext)
    const [productos, setProductos]=useState([carrito])
    console.log(carrito)

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
                    console.log(productos.nombre)
                    
                })}
            </div>
         
        </div>
    );
}

export default ItemWidgetContainer;