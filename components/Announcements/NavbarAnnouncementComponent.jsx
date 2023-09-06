import Link from 'next/link'
import React from 'react'
import { BsArrowUpRight, BsFillArrowUpRightCircleFill } from 'react-icons/bs'
const NavbarAnnouncementComponent = () => {
    return (
        // <div className='navbar-announcement-animation-container'>
        //     <div className="navbar-announcement-animation-subcontainer">
        //         <ul className='navbar-announcement-ul'>
        //             <li className="item-1 text-white text-[20px] ">The Most Awaited</li>
        //             <li className="item-2 text-white"> Hackathon Is coming.</li>
        //             <li className="item-4 text-white">The Embrione presents</li>
        //             <li className="item-5 text-white">in Association with</li>
        //             <li className="item-6 text-white">{"TBD"}</li>
        //             <Link href='/kodikon-3'><li className="item-6 text-white flex flex-row space-x-4 justify-center items-center pb-4 cursor-pointer" onClick={() => { alert("Registeration Form To Be out soon!") }}>
        //                 <BsFillArrowUpRightCircleFill className='text-xl md:text-2xl text-gray-300' /><p className='gradient-text-animation text-2xl md:text-2xl lg:text-3xl font-bold'>KODIKON 3.0 ✨</p></li></Link>
        //         </ul>
        //     </div>
        // </div>
        <div className='navbar-announcement-animation-container'>
            <div className="">
                <ul className=''>
                    {/* <li className="item-1 text-white text-[20px] ">The Most Awaited</li>
                    <li className="item-2 text-white"> Hackathon Is coming.</li>
                    <li className="item-4 text-white">The Embrione presents</li>
                    <li className="item-5 text-white">in Association with</li>
                    <li className="item-6 text-white">{"TBD"}</li> */}
                    <Link href='/kodikon-3'><li className="item-6 text-white flex flex-row space-x-4 justify-center items-center  cursor-pointer">
                        <BsFillArrowUpRightCircleFill className='text-xl md:text-2xl text-gray-300' /><p className='gradient-text-animation text-2xl md:text-2xl lg:text-3xl font-bold'>KODIKON 3.0 ✨</p></li></Link>
                </ul>
            </div>
        </div>
    )
}

export default NavbarAnnouncementComponent
