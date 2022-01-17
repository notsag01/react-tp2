import React, {useState} from 'react';

export function ItemCount() {
    const [contador, setContador]=useState(1)

        /* AUMENTA CONTADOR  */
        const aumentarContador=()=>{
            setContador(contador+1)
        }
        /* DISMINUYE CONTADOR */
        const disminuyeContador=()=>{
            setContador(contador-1)
        }

    return (
        <div>
            <div className="row">
                {/* CONTADORES */}
                <button className="btnContador" onClick={()=>aumentarContador()}> + </button>
                <p className="contador">{contador}</p>
                <button className="btnContador" onClick={()=>disminuyeContador()}> - </button>
            </div>              
        </div>
    );
}
