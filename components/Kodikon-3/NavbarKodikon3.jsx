"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { whitepeslogo, whitelogo } from "@/public/Kodikon3";
import Image from "next/image";

export const NavbarKodikon3 = () => {
    const ref = useRef(null);
    const [isIntersecting, setIntersecting] = useState(true);
    const [navbar, setNavbar] = useState(false)

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <nav
                className={` fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200  py-4 border-b-2  ${isIntersecting
                    ? "bg-zinc-900/0 border-zinc-900"
                    : "bg-zinc-900/500  border-zinc-800 "
                    }`} ref={ref}
            >
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            {/* {D:\Embrione PES\Kodikon 3.0\embrionepes.com\public\Kodikon3} */}
                            <div className="flex flex-row">
                                <a href="/" className="flex items-center h-10">
                                    {/* <img src={whitepeslogo} className="h-8 mr-3 text-white" alt="PES" /> */}
                                    <Image
                                        src={whitepeslogo}
                                        className="w-[100px]"
                                        alt=""
                                    />
                                </a>
                                <a href="/" className="hidden md:flex items-center h-10 ">
                                    {/* <img src={whitepeslogo} className="h-8 mr-3 text-white" alt="PES" /> */}
                                    <Image
                                        src={whitelogo}
                                        className="md:w-[100px] w-[100px]"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="md:hidden flex flex-row items-center justify-center w-fit space-x-5">
                                <Link href='https://hack2skill.com/hack/kodikon3' target='_blank'>
                                    <button className="text-white bg-white p-3 rounded-lg bg-opacity-25 h-fit w-fit  text-sm md:text-xl" >
                                        Register!
                                    </button>
                                </Link>
                                <button
                                    className={`p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 transition ease-in-out duration-100 ${navbar && 'animate-bounce'} ${!navbar && 'animate-pulse'}`}
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"

                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-3 lg:space-x-6 md:space-y-0">
                            <li className="text-white text-xs lg:text-[16px]">
                                <Link href="/kodikon-3/#about" onClick={() => setNavbar(false)}>About</Link>
                            </li>
                            <li className="text-white text-xs lg:text-[16px]">
                                <Link href="/kodikon-3/#theme" onClick={() => setNavbar(false)}>Themes</Link>
                            </li>
                            <li className="text-white text-xs lg:text-[16px]">
                                <Link href="/kodikon-3/#timeline" onClick={() => setNavbar(false)}>Timeline</Link>
                            </li>
                            <li className="text-white text-xs lg:text-[16px]">
                                <Link href="/kodikon-3/#sponser" onClick={() => setNavbar(false)}>Sponsers</Link>
                            </li>
                            <li className="text-white text-xs lg:text-[16px]">
                                <Link href="/kodikon-3/#faq" onClick={() => setNavbar(false)}>FAQ</Link>
                            </li>
                            <li className="text-white text-xs lg:text-[16px]">
                                <Link href="/#contact">Contact Us</Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};


{/* <nav className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${isIntersecting
                        ? "bg-zinc-900/0 border-transparent"
                        : "bg-zinc-900/500  border-zinc-800 "
                    }`} ref={ref}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Embrione</span>
    </a>
    <button onClick={() => setShowNavbar(!showNavbar)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}