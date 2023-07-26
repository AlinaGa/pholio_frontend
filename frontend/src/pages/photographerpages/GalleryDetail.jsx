//Upload happens here//Upload happens here
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Topbar from "../../components/photographer/Topbar";
import Sidebar from "../../components/photographer/Sidebar";
import ImageCard from "../../components/photographer/ImageCard";
import UploadButton from "../../components/photographer/UploadButton";


// import "../../components/client/Client.css";
import "../../App.css";
import "./GalleryDetail.css";


export default function GalleryDetail() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", data.image[0]);
        // formData.append("image", data.name);
        // formData.append("image", data.id);
        // formData.append("image", data.url);

        axios
            .post("http://localhost:8008/picture", formData)
            .then((res) => {
                toast.success("Image uploaded successfully");
                console.log(res.data);
            })
            .catch((err) => {
                toast.error("Image upload failed");
                console.log(err);
            });
        console.log(data);
    };

    return (
        <>
            <div className='adminpage'>
                <Sidebar />

                <div className='main'>

                    <div className='topbar'>
                        <Topbar />
                    </div>
                    <div className='content'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="file" {...register("image", { required: true })} />
                            <button type="submit">Upload</button>
                            {errors.image && <span>This filed is required!!!</span>}
                        </form>
                        <ToastContainer
                            position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                        <div className="imagescontainer">
                            <UploadButton />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                            <ImageCard />
                        </div>
                    </div>
                </div>
            </div>










            {/* <Card className="gallery">
                    <Card.Title>GalleryName</Card.Title>
                    <Card.Img src="..\src\assets\6_tn.jpg"></Card.Img>
                     {uploadedImages.map((image, index) => (
          <Card.Img key={index} src={image.url} />
        ))}
                </Card> */}




        </>
    );
}
