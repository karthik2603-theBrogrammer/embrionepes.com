"use client";
import React from "react";
import Lottie from "lottie-react";
import contact from "../../assets/contact.json";
import { useForm } from "react-hook-form";

const inputStyles = "text-center py-2 rounded-md w-[300px] text-black";
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    resetField('Full Name')
    resetField('Email ID')
    resetField('Subject')
    resetField('Message')

  };
  return (
    <div className="p-5 md:p-[110px] flex flex-col relative items-center justify-center">
      <h1
        className="text-white md:text-7xl text-5xl py-6 text-center mb-5"
        data-aos="zoom-in-up"
        data-aos-duration="500"
      >
        Get In Touch With Us!
      </h1>
      <div
        className={` w-fit h-fit bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-200  flex flex-col md:flex-row  items-center justify-center relative z-[23] lg:px-[70px]`}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center space-y-7  p-4 md:p-0 md:pl-6"
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
            {...register("Full Name", { required: true, max: 335, min: 3 })}
          />
          <input
            type="email"
            className={`${inputStyles}`}
            placeholder="Email ID"
            {...register("Email ID", { required: true, max: 257, min: 5 })}
          />
          <input
            type="text"
            className={`${inputStyles}`}
            placeholder="Subject"
            {...register("Subject", { required: true, max: 70, min: 0 })}
          />
          <textarea
            type="text"
            className={`${inputStyles}`}
            placeholder="Message"
            {...register("Message", { required: true, max: 400, min: 0 })}
          />

          <input
            type="submit"
            value="Send!"
            className="cursor-pointer hover:bg-blue-300 hover:text-black  rounded-md transition ease-in duration-150 p-2 mb-4"
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
    </div>
  );
};

export default ContactUs;
