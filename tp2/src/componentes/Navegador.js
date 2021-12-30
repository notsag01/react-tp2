import React from 'react';
import { Link } from 'react-router-dom';
import Navs from "./Navs"


function Navegador({titulo}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    
                   <Link to={`/`}> <h1 className="titulo"> {titulo} </h1> </Link>
                </div>
                <div className="col"></div>
            </div>
            <div>
                <Navs/>
            </div>
        </div>
    );
}

export default Navegador;