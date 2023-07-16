
import React from 'react';

const ToggleButton = ({ toggleCart}) => (
    <button className="toggle-button" onClick={toggleCart}>
        Show Cart
    </button>
);

export default ToggleButton;
