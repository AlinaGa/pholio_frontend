//Upload happens here//Upload happens here
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card } from "react-bootstrap";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../components/client/Client.css";
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
            <Navbar collapseOnSelect expand="sm">
                <Navbar.Toggle
                    aria-controls="navbarScroll"
                    data-bs-target="#navbarScroll"
                />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="clientnavbar">
                        {/* Prototype without real Linking */}
                        <div className="clientnavleft">
                            <button>back</button>
                        </div>
                        <div className="clientnavmiddle">My Galleries</div>
                        <div className="clientnavright">
                            <button>
                                <NavLink>Home</NavLink>
                            </button>
                            <button>
                                <NavLink>My Albums</NavLink>
                            </button>
                            <button>
                                <NavLink>Log Out</NavLink>
                            </button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

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
            <Card className="gallery">
                <Card.Title>GalleryName</Card.Title>
                <Card.Img src="..\src\assets\6_tn.jpg"></Card.Img>
                {/* {uploadedImages.map((image, index) => (
          <Card.Img key={index} src={image.url} />
        ))} */}
            </Card>
        </>
    );
}
