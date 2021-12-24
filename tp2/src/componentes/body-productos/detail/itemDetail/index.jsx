import React from 'react';
import { Link } from 'react-router-dom';

function ItemDetail({
    id, nombre, precio
}) {
    return (
        <Link to={`/producto/${id}`}>
            <div>
                <span> {nombre} </span>
                <span> {precio} </span>
            </div>

            
        </Link>
    );
}

export default ItemDetail;