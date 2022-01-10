import React from 'react';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
    return (
        
           <button className="cartWidget"> <NavLink to="/cartWidget"><i className="fas fa-shopping-cart fa-2x"></i></NavLink> </button>
        
    );
};

export default CartWidget;