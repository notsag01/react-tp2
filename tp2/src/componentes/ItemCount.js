import React, {useState} from 'react';

export function ItemCount({onAdd}) {
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
            <div className="row justify-content-center countCss">
                {/* CONTADORES */}
                <button className="btnContador" onClick={()=>disminuyeContador()}> - </button>
                <p className="contador">{contador}</p>
                <button className="btnContador" onClick={()=>aumentarContador()}> + </button>
                <button className='btnComprar' onClick={()=>onAdd(contador)}>COMPRAR</button>                    
            </div>              
        </div>
    );
}
