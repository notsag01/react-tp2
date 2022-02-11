import React from 'react';
import { Link } from 'react-router-dom';



export function Item({...producto}) {
    return (
            
            <div className="col-md-6 col-xl-4 ">                
                <div className="card d-flex justity-contente-center">  
                    <Link to={`/producto/${producto.id}`}>
                        <div className='d-flex justify-content-center'>
                            <img src={producto.imagen} alt={producto.id}></img>
                        </div>
                        <section>
                            <h1> {producto.nombre} </h1>                            
                            <span> ${producto.precio} </span>
                        </section>
                    </Link>
                </div>                
            </div>
            
    );
}


export default Item;