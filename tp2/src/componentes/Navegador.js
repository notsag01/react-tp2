import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
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
            <div className="row">
                <div className="col-10">
                    <Navs/>
                </div>
                <div className="col-2">
                    <CartWidget/>
                </div>
            </div>
        </div>
    );
}

export default Navegador;