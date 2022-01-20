import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { CarritoContext } from "../context/CarritoContext";



const CartWidget = () => {
    const {totalItems}=useContext(CarritoContext)

    return (
        
           <button className="cartWidget"> <NavLink to="/cartWidget"><i className="fas fa-shopping-cart fa-2x"></i><p style={{fontSize:"1rem"}}> {totalItems()} </p></NavLink> </button>
        
    );
};

export default CartWidget;