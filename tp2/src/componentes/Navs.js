import React from 'react';
import { NavLink } from 'react-router-dom';



function Navs() {
    const categorias=[
        {id:1, nombre:"HOME", ruta: "/"},
        {id:2, nombre:"ACERO", ruta: "/categoria/acero"},
        {id:3, nombre:"PLATA", ruta: "/categoria/plata"},
        {id:4, nombre:"ORO", ruta: "/categoria/oro"},
    ]
    
    return (
        <div className="row">
            {categorias.map((cat)=>{
                return(
                    <div className="col navsDeCategorias" key={cat.id}>
                        <NavLink className="nombreCategorias" to={cat.ruta}>
                            {cat.nombre}
                        </NavLink>
                    </div>
                )
            })}
        </div>
    );
}

export default Navs;