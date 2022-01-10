import React from 'react';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
    return (
        
           <spam className="cartWidget"> <NavLink to="/cartWidget"><i className="fas fa-shopping-cart fa-2x"></i></NavLink> </spam>
        
    );
};

export default CartWidget;