import React, { useContext } from 'react';
import {CarritoContext} from "../context/CarritoContext"
import { ItemCount } from './ItemCount';


function ItemDetail({id, nombre, imagen, precio}) {
    const {addProductoCarrito}=useContext(CarritoContext)

    const sendCarrito=()=>{
        
        //console.log("hola!")
        addProductoCarrito(nombre,precio,id)
        //console.log(nombre,precio,id)
    }
    
    return (
        <div className="container">
            <div className="row justify-content-center detail">
                <div className="col-md-4">
                    <img src={imagen} alt={id}></img>
                </div>
                <div className="col-md-4">
                    <h1> {nombre} </h1>
                    <h3> ${precio} </h3>
                    <h6> ID:{id}</h6>
                    {/* AGREGO AL CARRITO */}
                    <ItemCount addProductoCarrito={addProductoCarrito}/>
                    <button id={id} onClick={sendCarrito}>COMPRAR</button>                    
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;