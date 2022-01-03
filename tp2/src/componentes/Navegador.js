import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Navs from "./Navs"


function Navegador({titulo}) {
    return (
        <div className="container">
            <div className="row">
                            
                <div className="col"> <Link to={"/"}> <img className='logo' src= "/assets/img/logo/logoII.png" alt='logo'></img> </Link></div>
                <div className="col d-flex justity-content-center align-items-center">
                    
                   <Link to={`/`}> <h1 className="titulo"> {titulo} </h1> </Link>
                </div>
                <div className="col"></div>
            </div>
            <div className="row my-5">
                <div className="col-10">
                    <Navs/>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center">
                    <CartWidget/>
                </div>
            </div>
        </div>
    );
}

export default Navegador;