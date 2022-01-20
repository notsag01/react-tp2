import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {CarritoContext} from "../context/CarritoContext"
import { ItemCount } from './ItemCount';


function ItemDetail({id, nombre, imagen, precio}) {
    const {addProductoCarrito}=useContext(CarritoContext)

    const[agregado, setAgregado]=useState(false)

    const onAdd=(contador)=>{
        
        //console.log("hola!")
        addProductoCarrito(nombre,precio,id, contador)
        //console.log(nombre,precio,id)

        setAgregado(true)
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
                    {agregado? <Link to="/cartWidget"> Ir al carrito </Link> : <ItemCount onAdd={onAdd}/>}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;