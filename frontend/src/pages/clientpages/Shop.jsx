import React, { useState } from 'react';

import "../../App.css";
import '../../components/client/client.css';
import InfoBox from '../../components/client/Infobox';
import ShopBanner from '../../components/client/ShopBanner';
import ShopImage from '../../components/client/ShopImage';
import Cart from '../../components/client/Cart';
import ToggleButton from '../../components/client/ToggleButton';

const Shop = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* <Navbar /> */}
            <div>
                <div className='galleryheadersection'>
                    <ShopBanner />
                    <h1 className='galleryname'>Gallery Name</h1>
                </div>
                <div className='shopimagescontainer'>
                    <ShopImage />
                    {/* <ShopImage />
                <ShopImage />
                <ShopImage />
                <ShopImage />
                <ShopImage />
                <ShopImage /> */}
                </div>
                <div className='cartsection'>

                    <ToggleButton toggleCart={toggleCart} />
                    <Cart isOpen={isOpen} toggleCart={toggleCart} />
                </div>
                {/* <InfoBox /> */}
            </div>
        </>
    );
}

export default Shop;