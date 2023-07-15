import React, { useState } from 'react';
import "./client.css";
import "../../App.css";

import CartItem from './CartItem';
import CartPrice from './CartPrice';

const Cart = ({ isOpen, toggleCart }) => (
    <div className={`cart ${isOpen ? 'open' : ''}`}>
        <div className="content">
            <h2>Your Selection</h2>
            <CartItem />
            <CartPrice />
        </div>
    </div>
);


export default Cart;