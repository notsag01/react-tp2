import React from 'react';
import {NavLink} from 'react-router-dom';

export const ItemDetail =({...producto}) =>{
    return (
        <div className='container'>
            <NavLink to={`/producto/${producto.id}`}>
                <span> {producto.nombre} </span>
                <span> {producto.precio} </span>
            </NavLink>
        </div>
    );
}

