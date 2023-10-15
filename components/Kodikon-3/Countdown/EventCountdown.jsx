'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Countdown from 'react-countdown';

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <div className="h-fit my-32 px-2"><h1 className="text-white text-5xl md:text-6xl lg:text-8xl text-center"><span className="gradient-text-animation">Kodikon 3.0</span> Registration Open!</h1>
        <div className="w-full h-fit flex items-center justify-center">
                <button className="text-black text-xl md:text-3xl  text-center bg-white p-3 rounded-md my-12 hover:bg-gray-300 transition ease-in duration-200">Register!</button>
            </div></div>;
    } else {
        return <div className="h-fit my-32 px-2 flex flex-col items-center justify-center gap-y-8">
            <h1 className="text-white text-5xl md:text-6xl lg:text-8xl text-center">Registrations Open In</h1>
            <div className="flex gap-3 text-gray-200 md:text-5xl">
            <div><span className="text-4xl md:text-6xl lg:text-7xl text-center bg-clip-text">{days}</span>days</div> 
            <div><span className="text-4xl md:text-6xl lg:text-7xl text-center bg-clip-text">{hours}</span>hours</div> 
            <div><span className="text-4xl md:text-6xl lg:text-7xl text-center bg-clip-text">{minutes}</span>min</div> 
            <div><span className="text-4xl md:text-6xl lg:text-7xl text-center bg-clip-text">{seconds}</span>sec</div>
            </div>
{/* <h1 className=" text-4xl md:text-6xl lg:text-8xl text-center bg-clip-text text-gray-200">{days}d:{hours}h:{minutes}min:{seconds}s</h1> */}
        </div>;
    }
};

const EventCountdown = () => {
    const [timeLeft, setTimeLeft] = useState(null)
    useEffect(() => {
        axios.get('/api/getTime').then((res) => {
            setTimeLeft(res.data.registrationsBeginDate)
        })
    })
    return (
        <div className="h-fit md:py-5">
            {
                timeLeft === null ? (
                    <h1 className="text-white text-5xl md:text-6xl lg:text-8xl text-center">Countdown Coming Soon!</h1>
                ) : (
                    <Countdown
                        date={timeLeft}
                        renderer={renderer}
                    />
                )
            }
        </div>
    )
}
export default EventCountdown
