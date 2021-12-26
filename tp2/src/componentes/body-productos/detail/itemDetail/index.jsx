import React from 'react';
import {Link} from 'react-router-dom';

export const ItemDetail =({producto}) =>{
    return (
        <div key={producto.id}>
            <Link to={`/producto/${producto.id}`}>
                <span> {producto.nombre} </span>
                <span> {producto.precio} </span>
            </Link>
        </div>
    );
}

