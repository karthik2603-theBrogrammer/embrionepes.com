'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Countdown from 'react-countdown';
import Link from 'next/link';

const renderer = ({ days, hours, minutes, seconds, completed }) => {

    if (completed) {
        return (
            <div className="h-fit my-4 md:my-32 px-2">
                <h1 className="text-white text-5xl md:text-6xl lg:text-8xl text-center">
                    <span className="gradient-text-animation">Kodikon 3.0</span> Registration Open!
                </h1>
                <div className="w-full h-fit flex items-center justify-center">
                    <Link target='_blank' href='https://hack2skill.com/hack/kodikon3'>
                        <button className="text-black text-xl md:text-3xl text-center bg-white p-3 rounded-md my-12 hover:bg-gray-300 transition ease-in duration-200">
                            Register!
                        </button>


                    </Link>

                </div>
            </div>
        );
    } else {
        return (
            <div className="h-fit my-32 px-2 flex flex-col items-center justify-center gap-y-8">
                <h1 className="text-white text-5xl md:text-6xl lg:text-8xl text-center">Registrations Open In</h1>
                <div className="flex gap-3 text-gray-200 md:text-5xl">
                    <div>
                        <span className="text-4xl md:text-6xl lg:text-7xl text-center bg-clip-text">{days}</span>
                        days
                    </div>
                    <div>
                        <span className="text-4xl md:text-6xl lg:text-7xl text-center bg-clip-text">{hours}</span>
                        hours
                    </div>
                    <div>
                        <span className="text-4xl md:text-6xl lg:text-7xl text-center bg-clip-text">{minutes}</span>
                        min
                    </div>
                    <div>
                        <span className="text-4xl md:text-6xl lg:text-7xl text-center bg-clip-text">{seconds}</span>
                        sec
                    </div>
                </div>
            </div>
        );
    }
};

const EventCountdown = () => {
    const [timeleft, setTimeLeft] = useState(null)
    useEffect(() => {
        axios.get('/api/getTime').then((res) => {
            setTimeLeft(res.data.timeLeft)
        })
    }, [])
    return (
        <>
            {
                timeleft && (<div className="h-fit md:py-5">
                    <Countdown
                        date={timeleft} // Setting the timer for today 9 PM
                        renderer={renderer}
                    />
                </div>)
            }
        </>

    );
};

export default EventCountdown;
