import React from 'react';
import "./client.css";
import "../../App.css";


const CartItem = () => {
    return (
        <>
            <div className="cartitem">
                <img className="cartimage" src="..\src\assets\11_tn.jpg" />
                <input className='cartcomment'
                    type="text"
                // value={this.state.value}
                // onChange={this.handleChange}
                />
            </div>
        </>
    )
}

export default CartItem;