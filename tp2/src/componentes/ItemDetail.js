import React from 'react';


function ItemDetail({id, nombre, imagen, precio}) {

    const sendCarrito=(event)=>{
        event.preventDefault();
        console.log("hola!")
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
                    <button id={id} onClick={sendCarrito}>COMPRAR</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;