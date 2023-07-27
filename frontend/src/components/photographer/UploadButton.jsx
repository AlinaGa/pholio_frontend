import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../photographer/photographer.css";
import "../../App.css";

const UploadButton = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", data.image[0]);

    axios
      .post("http://localhost:8000/image", formData)
      .then((res) => {
        toast.success("Image uploaded successfully");
        console.log(res.data);
      })
      .catch((err) => {
        toast.error("Image upload failed");

        console.log(err);
      });
  };
  return (
    <button className="uploadimages">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fileInput">
          <input
            type="file"
            id="fileInput"
            {...register("image", { required: true })}
            style={{ display: "none" }}
          />
          <div className="custom-icon">
            <i className="createicon bi bi-patch-plus-fill"></i>
            {/* Your custom icon here */}
            <i className="icon-upload" />
          </div>
        </label>
        <button type="submit">Upload</button>
        {errors.image && <span>This field is required!!!</span>}
      </form>

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("image", { required: true })}>
            
            </input>

        <button type="submit">Upload</button>
        {errors.image && <span>This filed is required!!!</span>}
      </form> */}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="uploadimgs">Upload Images</div>
    </button>
  );
};

export default UploadButton;
