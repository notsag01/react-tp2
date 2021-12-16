import React from "react";
import {estilos} from "./styles"






const Header = ({titulo}) =>{
    return(
        <>
        <header>
            <div className="container">
                <div className=" row">
                    <div className="col"></div>
                    <div className="col text-center"> <h1 style={estilos}> {titulo} </h1> </div>                                            
                    <div className="col"></div>
                </div>
            </div>
        </header>
    </>
    )
}

export default Header