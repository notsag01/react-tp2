import React from 'react';
import  Item  from "./Item"


function ItemLista ({productos}) {
    console.log(productos)
    return (
        <section className="container">
            <div className="row">
            {productos.map((producto)=>(

            <Item  {...producto} key={producto.id}/>
            ))}
            </div>
        </section>
    );
}

export default ItemLista;