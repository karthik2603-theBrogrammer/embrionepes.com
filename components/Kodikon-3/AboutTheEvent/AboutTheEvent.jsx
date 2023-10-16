"use client"
import TitleComponent from '../HelperComponents/TitleComponent'
import Lottie from "lottie-react";
import about from '../../../assets/about-kodikon.json'
import Image from 'next/image';
import React from 'react'
const stats = [
    {
        statName: 'Registerations',
        statValue: '<placeholder>',
        statAnimationPath: 'PATH'
    },
    {
        statName: 'Registerations',
        statValue: '<placeholder>',
        statAnimationPath: 'PATH'
    },
    {
        statName: 'Registerations',
        statValue: '<placeholder>',
        statAnimationPath: 'PATH'
    },
    {
        statName: 'Registerations',
        statValue: '<placeholder>',
        statAnimationPath: 'PATH'
    },
    {
        statName: 'Registerations',
        statValue: '<placeholder>',
        statAnimationPath: 'PATHPATH'
    }
]

// Move stats to the constants file.
const AboutTheEvent = () => {
    return (
        <div className='mt-20 h-fit  space-y-6  md:px-0'>
            <TitleComponent id="about" titleData={"About The Event"} />
            <div className="blue__gradient absolute md:top-[800px]  h-[350px] w-[350px] md:h-[400px] md:w-[450px] z-[-60] " />
            <div className="flex flex-col lg:flex-row items-center justify-center ">
                <div className="p-6">
                    <p className="text-white text-justify p-4 md:text-xl">Kodikon 3.0, the third edition of our 24-hour highly successful flagship national level hackathon, aims at developing creative solutions to real-world problems while also promoting friendly, healthy competition amongst peers.
                        Open to all engineering undergraduates across the nation, this event ignites innovation, camaraderie, and healthy competition.
                        160+ participants will battle it out for the coveted prizes.
                    </p>
                    <p className="text-white text-justify p-4 md:text-xl">Backed by comprehensive mentoring and continuous guidance from industry-renowned experts, Kodikon 3.0 provides a platform for attendees to be immersed in valuable industry insights, cultivate essential soft skills, expand networks, and refine technical prowess.
                        The event strives to turn aspirations into achievements, seamlessly blending innovation with expertise to shape the leaders of tomorrow.</p>
                </div>
                <div className="grid place-items-center">
                    <Lottie
                        loop={true}
                        animationData={about}
                        style={{ height: 360, width: 360 }}

                    />
                    {/* <Image src={'/astronaut.svg'} alt = '' height={700} width = {700} className = 'w-[1000px] h-[1000px]'/> */}
                </div>
            </div>
        </div>
    )
}

export default AboutTheEvent