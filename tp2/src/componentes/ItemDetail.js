import React from 'react';


function ItemDetail({id, nombre, imagen, precio}) {
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
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;