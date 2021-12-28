import React from 'react';
import { Link } from 'react-router-dom';

function ItemDetail({id, nombre}) {
    return (
        <div>
            <Link to={`producto/${id}`}>
                <h1>{nombre}</h1>
            </Link>
        </div>
    );
}

export default ItemDetail;