import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CarritoContext } from "../context/CarritoContext";
import ItemFormulario from './ItemFormulario';
import {getFirestore} from"../firebase/index";




function ItemWidgetContainer() {
    const {carrito, removeProducto, precioTotal}=useContext(CarritoContext)
    /* const [productos, setProductos]=useState([carrito]) */
    //console.log(carrito)
    
     const[form, setform]=useState(false)
     

     const onAdd=(datos)=>{
         const db= getFirestore();
         const orederCollection=db.collection("order") 
        
         let detalleCompra={
            comprador: datos,
            items: carrito,
            date: Date.now(),
            total: precioTotal()
        }
         orederCollection.add(detalleCompra).then(({id})=>{
            alert(`Tu pedido tiene el código ${id}`);
         }).catch(err=>{
             alert(err)
         })
        console.log(detalleCompra)
        
     }
    

    return (
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <h1 className="tituloCarrito">CARRITO</h1>
                    </div>
                    <div className="col"></div>
                </div>
                {carrito.length>0 ? 
            <div>
                {carrito.map((productos)=>{
                    return(
                        
                        <div key={productos.id}>
                            <h1> {productos.nombre} </h1>
                            <h3> ${productos.precio} </h3>                                                        
                            <div>
                                <button id={productos.id} onClick={()=>removeProducto(productos.id)} >ELIMINAR</button>
                            </div>                            
                            <div>
                                <p> subtotal: {productos.precio * productos.cantidad }</p>
                            </div>
                        </div>
                        
                    )
                    
                })}
                <div className="row">
                    <div className="col">
                        <h1> TOTAL: {precioTotal()} </h1>
                    </div>
                    <div className="col">
                        <button onClick={()=>setform(true)} className="finalizar">FINALIZAR COMPRA</button>
                    </div>
                </div>
                {form === true ? <ItemFormulario onAdd={onAdd}/>: ""}
            </div> 
            : <Link to="/"> <h1> NO HAY ITEMS- VOLVER A LA PAGINA PRINCIPAL </h1> </Link>
}
         
        </div>
    );
}

export default ItemWidgetContainer;