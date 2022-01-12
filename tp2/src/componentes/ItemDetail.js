import React, { useContext } from 'react';
import {CarritoContext} from "../context/CarritoContext"


function ItemDetail({...productos}) {
    console.log(productos)
    const {addProductoCarrito}=useContext(CarritoContext)
    //const [itemName, setItemName]=useState("")



    const sendCarrito=()=>{
        
        //console.log("hola!")
        addProductoCarrito(productos)
        console.log(productos)
    }
    
    return (
        <div className="container">
            <div className="row justify-content-center detail">
                <div className="col-md-4">
                    <img src={productos.imagen} alt={productos.id}></img>
                </div>
                <div className="col-md-4">
                    <h1> {productos.nombre} </h1>
                    <h3> ${productos.precio} </h3>
                    <h6> ID:{productos.id}</h6>
                    <button id={productos.id} onClick={sendCarrito}>COMPRAR</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;