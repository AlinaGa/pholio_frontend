import React from 'react';

import "../../App.css";
import '../../components/client/client.css';
import InfoBox from '../../components/client/Infobox';
import ShopBanner from '../../components/client/ShopBanner';
import ShopImage from '../../components/client/ShopImage';

const Shop = () => {
    return (<>
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
                <ShopImage />
                <ShopImage />
                <ShopImage />
                <ShopImage />
                <ShopImage />
                <ShopImage />
                <ShopImage />
                <ShopImage />
                <ShopImage />
                <ShopImage />
                <ShopImage /> */}
            </div>

        </div>
        {/* <InfoBox /> */}
    </>
    );
}

export default Shop;