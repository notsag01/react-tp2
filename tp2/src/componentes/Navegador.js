import React from 'react';
import Navs from "./Navs"


function Navegador({titulo}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    
                   <h1 className="titulo"> {titulo} </h1> 
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