import React, {useContext, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CarritoContext } from "../context/CarritoContext";


function ItemFormulario({onAdd}) {

    const {clearCarrito}=useContext(CarritoContext)

    const [datos, setDatos]=useState({
        nombre:"",
        apellido:"",
        telefono:"",
        email:""
    })
    //console.log(datos)

    const handleChangeInput=(e)=>{
        //console.log(e.target.value)
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const sendDatos=(e)=>{
        e.preventDefault()
       
       
    }

    return (
        <div className="container">            
            <h1 className="row justify-content-center my-5">FORMULARIO</h1>
            <div className="container">
                <div className="col"></div>
                <div className="col">
                    <form onSubmit={sendDatos}>
                        <div>
                            <input type="text" placeholder="Nombre" onChange={handleChangeInput} name="nombre"></input>
                        </div>
                        <div>
                            <input type="text" placeholder="Apellido" onChange={handleChangeInput} name="apellido"></input>
                        </div>
                        <div>
                            <input type="tel" placeholder="Telefono" onChange={handleChangeInput} name="telefono"></input>
                        </div>
                        <div>
                            <input type="mail" placeholder="Email" onChange={handleChangeInput} name="email"></input>
                        </div>
                        <Link to="/final"> <button type="submit" onClick={()=>{onAdd(datos); clearCarrito()}} >CONFIRMAR</button> </Link>
                    </form>
                </div>
                <div className="col"></div>

            </div>
        </div>

    );
}

export default ItemFormulario;