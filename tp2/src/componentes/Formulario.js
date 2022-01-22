import React, { useState } from 'react';

export function Formulario(){
    const [datos, setDatos]=useState({
        nombre:"",
        apellido:""
    })

    const inputChanges=(e)=>{

        setDatos({...datos, 
            [e.target.nombre] : e.target.value})
    }

    const sendData=(e)=>{
        e.preventDefault()
    }
    
    return(
        <>
            <form onSubmit={sendData}>
                <div>
                    <input type="text" placeholder='Nombre' onChange={inputChanges} name='nombre'>
                    </input>
                </div>
                <div>
                    <input type="text" placeholder='Apellido' onChange={inputChanges} name='apellido'>
                    </input>
                </div>
                <button>enviar</button>

            </form>
        </>
    )
}

export default Formulario