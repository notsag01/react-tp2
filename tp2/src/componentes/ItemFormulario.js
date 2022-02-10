import React, {useContext, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CarritoContext } from "../context/CarritoContext";
import {useForm} from 'react-hook-form'


function ItemFormulario({onAdd}) {

    const {clearCarrito}=useContext(CarritoContext)

    const { register,errors, handleSubmit } = useForm();

    const onSubmit=(data)=>{
        console.log(data)
    }

    const [datos, setDatos]=useState({
        nombre:"",
        apellido:"",
        telefono:"",
        email:""
    })
    

    const handleChangeInput=(e)=>{
        //console.log(e.target.value)
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
 
    return (
        <div className="container formulario">            
            <h1 className="row justify-content-center my-5">FORMULARIO</h1>
            <div className="container">
                <div className="col"></div>
                <div className="col">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input type="text" placeholder="Nombre" onChange={handleChangeInput} name="nombre"
                            ref={register(
                                'value.name',{
                                required:{
                                    value: true,
                                    nessage:"Nombre requerido"
                                }
                            })}
                            ></input>
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.nombre?.message}
                            </span>
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