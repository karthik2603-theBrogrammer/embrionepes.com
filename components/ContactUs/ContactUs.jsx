"use client";
import React from "react";
import Lottie from "lottie-react";
import contact from "../../assets/contact.json";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inputStyles = "text-center py-2 rounded-md w-[300px] text-black";
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();
  const onSubmit = async (formData) => {
    toast.info('Sending Your Message...', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

    axios
      .post("/api/sendMessage", formData)
      .then((res) => {
        // console.log(res.data);
        toast.success( `${res?.data?.message}`, {
          position: "top-center",
          draggablePercent:60,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => {console.log(err);
        toast.error('Some Error occured, Please try again', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });});

    // resetField("fullName");
    // resetField("emailID");
    // resetField("subject");
    // resetField("message");
  };
  return (
    <div className="p-5 md:p-[110px] flex flex-col relative items-center justify-center"
    id="contact"
    >
      <h1
        className="text-white md:text-7xl text-5xl py-6 text-center mb-5"
        data-aos="zoom-in-up"
        data-aos-duration="500"
      >
        Get In Touch With Us!
      </h1>
      <div
        className={` w-fit h-fit bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-200  flex flex-col md:flex-row  items-center justify-center relative  lg:px-[70px]`}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center space-y-7  px-4 pb-4 md:p-0 md:pl-6"
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <h1
            className="text-white md:text-4xl text-3xl py-6 text-center mb-5"
            data-aos="zoom-in-up"
            data-aos-duration="500"
          >
            Speak Your Mind!
          </h1>
          <input
            type="text"
            className={`${inputStyles}`}
            placeholder="Full Name"
            {...register("fullName", { required: true, max: 335, min: 3 })}
          />
          <input
            type="email"
            className={`${inputStyles}`}
            placeholder="Email ID"
            {...register("emailID", { required: true, max: 257, min: 5 })}
          />
          <input
            type="text"
            className={`${inputStyles}`}
            placeholder="Subject"
            {...register("subject", { required: true, max: 70, min: 0 })}
          />
          <textarea
            type="text"
            className={`${inputStyles}`}
            placeholder="Message"
            {...register("message", { required: true, max: 400, min: 0 })}
          />

          <input
            type="submit"
            value="Send!"
            className="cursor-pointer hover:bg-blue-300 hover:text-black  rounded-md transition ease-in duration-150 p-2 relative bottom-4"
          />
        </form>
        <div
          className="z-10 relative "
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <Lottie
            loop={true}
            animationData={contact}
            // style={{ height: 300, width: 300 }}
            className="h-[300px] w-[300px] md:h-[430px] md:w-[430px] lg:h-[500px] lg:w-[500px]"
          />
        </div>
      </div>
      <ToastContainer draggablePercent={60} />
    </div>
  );
};

export default ContactUs;
