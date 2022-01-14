import React from 'react';

export const ItemWidget=({borrarProducto, ...productos})=> {
    return (
        <>
            <div className="col-md-4">
                <img src={productos.imagen} alt={productos.id}></img>
            </div>
            <div className="col-md-4">
                <h1> {productos.nombre} </h1>
                <h3> ${productos.precio} </h3>
                <h6> ID:{productos.id}</h6>   
                <button onClick={()=>borrarProducto(productos.id)}>-carrito</button>                                 
            </div>
        </>    
        
    );
}

