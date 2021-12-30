import React from 'react';
import { Link } from 'react-router-dom';



export function Item({...producto}) {
    return (
            
            <div className="col-md-4">                
                <div className="card d-flex justity-contente-center">  
                    <Link to={`/producto/${producto.id}`}>
                        <img src={producto.imagen} alt={producto.id}></img>
                        <h1> {producto.nombre} </h1>
                        <span> ${producto.precio} </span>
                    </Link>
                </div>                
            </div>
            
    );
}


export default Item;