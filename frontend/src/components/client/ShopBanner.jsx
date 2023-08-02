import React from 'react';
import "./client.css";
import "../../App.css";


const ShopBanner = ({ images }) => {
    if (images.length === 0) {
        return null; // Return null if there are no images to prevent errors
    }

    const firstImageURL = images[0].url;


    return (
        <>
            <img className="shopbanner" src={firstImageURL} alt="Shop Banner" />
        </>
    )
}

export default ShopBanner;

