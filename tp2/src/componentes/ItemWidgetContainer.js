import React, {useContext} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CarritoContext } from "../context/CarritoContext";



function ItemWidgetContainer() {
    const {carrito, removeProducto, precioTotal}=useContext(CarritoContext)
    /* const [productos, setProductos]=useState([carrito]) */
    //console.log(carrito)
    

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
                    //console.log(productos.nombre)
                    return(
                        
                        <div key={productos.id}>
                            <h1> {productos.nombre} </h1>
                            <h3> ${productos.precio} </h3>
                            <h6> ID:{productos.id}</h6>
                            <div>
                                <button id={productos.id} onClick={()=>removeProducto(productos.id)} >ELIMINAR</button>
                            </div>                            
                            <div>
                                <p> subtotal: {productos.precio * productos.cantidad }</p>
                            </div>
                        </div>
                        
                    )
                    
                })}
                <div>
                    <h1> TOTAL: {precioTotal()} </h1>
                </div>
            </div> 
            : <Link to="/"> <h1> NO HAY ITEMS- VOLVER A LA PAGINA PRINCIPAL </h1> </Link>
}
         
        </div>
    );
}

export default ItemWidgetContainer;