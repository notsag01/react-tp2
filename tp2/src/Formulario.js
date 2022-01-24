import React, { useState } from 'react';

function Formulario() {
    const [datos, setDatos]=useState({
        nombre:"",
        apellido:""
    })

    const handleChangeInput=(e)=>{
        
    }

    return (
        <div className="container">            
            <h1 className="row justify-content-center my-5">FORMULARIO</h1>
            <div className="container">
                <div className="col"></div>
                <div className="col">
                    <form>
                        <div>
                            <input type="text" placeholder="Nombre"></input>
                        </div>
                    </form>
                </div>
                <div className="col"></div>

            </div>
        </div>

    );
}

export default Formulario;<h1>formulario</h1>