import React from 'react';



export function Item({...producto}) {
    return (
            
            <div className="col-md-4">                
                <div className="card d-flex justity-contente-center">  
                    <img src={producto.imagen} alt={producto.id}></img>
                    <h1> {producto.nombre} </h1>
                    <span> {producto.precio} </span>
                </div>                
            </div>                                
    );
}


export default Item;