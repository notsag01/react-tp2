import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    const paginas=[
        {id:"1", dir:"/", texto:"PROMOCIONES" },
        {id:"2", dir:"/categoria/plata", texto:"PLATA" },
        {id:"3", dir:"/categoria/acero", texto:"ACERO" },
        {id:"4", dir:"/categoria/oro", texto:"ORO" },
    ]


    return (
          <div className="container-fluid">
            <h1 className="titulo" >Hola mundo</h1>
            <div>
                {paginas.map((pag)=>{
                    return(
                        <div className="row links" key={pag.id}>
                           <NavLink className="col navlinks" to={pag.dir} exact activeClassName={`activeClass`}>
                                {pag.texto}
                            </NavLink>     
                        </div>
                    )
                })}
            </div>

            
        </div>
    );
};

export default Navbar;