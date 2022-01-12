import React, {useContext} from 'react';
import { CarritoContext } from "../context/CarritoContext";



function ItemWidgetContainer() {
    const {carrito}=useContext(CarritoContext)
    /* const [productos, setProductos]=useState([carrito]) */
    console.log(carrito)

    return (
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <h1 className="tituloCarrito">CARRITO</h1>
                    </div>
                    <div className="col"></div>
                </div>
            <div>
                {carrito.map((productos)=>{
                    //console.log(productos.nombre)
                    return(
                        <div className="container">
                            <div className="row justify-content-center detail">
                                <div className="col-md-4">
                                    <img src={productos.imagen} alt={productos.id}></img>
                                </div>
                                <div className="col-md-4">
                                    <h1> {productos.nombre} </h1>
                                    <h3> ${productos.precio} </h3>
                                    <h6> ID:{productos.id}</h6>                                    
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    );
}

export default ItemWidgetContainer;