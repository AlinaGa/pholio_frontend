import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import InfoBox from "../../components/client/Infobox";
import ShopBanner from "../../components/client/ShopBanner";
import ShopImage from "../../components/client/ShopImage";
import Cart from "../../components/client/Cart";
import ToggleButton from "../../components/client/ToggleButton";
import ClientNavbar from "../../components/client/ClientNavbar";
import "../../App.css";
import "../../components/client/client.css";
import axiosClient from "../../axiosClient";


const Shop = () => {
  const { id } = useParams();

  const [images, setImages] = useState([]);
  const [gallery, setGallery] = useState();

  useEffect(() => {
    axiosClient
      .get(`/image?gallery=${id}`)

      .then((res) => {
        setImages(res.data);
        console.log("Gallery Images", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axiosClient.get(`/gallery/${id}`)
      .then((response) => {
        setGallery(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const toggleCart = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <ClientNavbar />
      <div className="shoppage">
        <div className="galleryheadersection">
          <ShopBanner images={images} />
          <h1 className="galleryname">{gallery?.name}</h1>
        </div>
        <div className="shopimagescontainer">
          {images.map((image) => (
            <ShopImage key={image.id} img={image} />
          ))}

          {/* <ShopImage />
          <ShopImage />
          <ShopImage />
          <ShopImage />
          <ShopImage />
          <ShopImage />
          <ShopImage />
          <ShopImage />
          <ShopImage /> */}
        </div>
        {/* <div className='cartsection'>

                    <ToggleButton toggleCart={toggleCart} />
                    <Cart isOpen={isOpen} toggleCart={toggleCart} />
                </div> */}
        {/* <InfoBox /> */}
      </div>
    </>
  );
};

export default Shop;
