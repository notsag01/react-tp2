import React from 'react';
import { Link } from 'react-router-dom';

function itemDetail({id, nombre,imagen,precio}) {
    return (
        <Link to={`/busqueda/${id}`}>
            <div className="contendor" >
                <div>
                    <div>
                        <img src={imagen} alt=""/>
                    </div>
                    <h3> {nombre} </h3>
                    <h4> ${precio} </h4>                                  
                </div>
            </div>
            
        </Link>
    );
}

export default itemDetail;