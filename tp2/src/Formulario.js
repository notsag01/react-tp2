import React, { useState } from 'react';

function Formulario() {
    const [datos, setDatos]=useState({
        nombre:"",
        apellido:""
    })

    const handleChangeInput=(e)=>{
        console.log(e.target.value)
        console.log(e.target.nombre)
        
    }

    const sendDatos=(e)=>{
        e.preventDefault()
        setDatos({
            ...datos,
            [e.target.nombre] : e.target.value
        })
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
                        <button type="submit">CONFIRMAR</button>
                    </form>
                </div>
                <div className="col"></div>

            </div>
        </div>

    );
}

export default Formulario;<h1>formulario</h1>