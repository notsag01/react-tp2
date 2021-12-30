import React from 'react';
import { NavLink } from 'react-router-dom';



function Navs() {
    const categorias=[
        //{id:1, nombre:"HOME", ruta: "/"},
        {id:2, nombre:"ACERO", ruta: "/categoria/ACERO"},
        {id:3, nombre:"PLATA", ruta: "/categoria/PLATA"},
        {id:4, nombre:"ORO", ruta: "/categoria/ORO"},
    ]
    
    return (
        <div className="row">
            {categorias.map((cat)=>{
                return(
                    <div className="col navsDeCategorias" key={cat.id}>
                        <NavLink to={cat.ruta} className="nombreCategorias" >
                            {cat.nombre}
                        </NavLink>
                    </div>
                )
            })}
        </div>
    );
}

export default Navs;