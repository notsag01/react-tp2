import React from 'react';
import  Item  from "./Item"


function ItemLista ({productos}) {
    console.log(productos)
    return (
        <section className="container">
            <div className="row">
                <div className='col-md-4 '></div>
                <div className='col-md-8 '>
                    <div className='container mx-1'>
                        <div className='row'>
                            {productos.map((producto)=>(

                                <Item  {...producto} key={producto.id}/>
                            ))}
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default ItemLista;