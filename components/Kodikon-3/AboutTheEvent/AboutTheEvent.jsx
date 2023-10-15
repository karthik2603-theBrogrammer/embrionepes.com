"use client"
import TitleComponent from '../HelperComponents/TitleComponent'
import { mesh } from '@/public/Kodikon3'
import Image from 'next/image'
import { useScroll } from 'framer-motion'

import React, { useEffect, useRef } from 'react'

// Move stats to the constants file.
const AboutTheEvent = () => {

    return (
        <div className=' h-fit  space-y-6'>
            <TitleComponent titleData="About the Event" id="about" />
            <div className="blue__gradient absolute md:top-[800px]  h-[350px] w-[350px] md:h-[400px] md:w-[450px] z-[-60] " />
            <div className="flex flex-col lg:flex-row items-center justify-center ">
                <div className='flex flex-col items-start'>
                    <div className="text-white text-justify p-8">Kodikon 3.0, the third edition of our 24-hour highly successful flagship national level hackathon, aims at developing creative solutions to real-world problems while also promoting friendly, healthy competition amongst peers. Open to all engineering undergraduates across the nation, this event ignites innovation, camaraderie, and healthy competition. 160+ participants will battle it out for the coveted prizes.</div>
                    
                    <div className="text-white text-justify p-8">
                    Backed by comprehensive mentoring and continuous guidance from industry-renowned experts, Kodikon 3.0 provides a platform for attendees to be immersed in valuable industry insights, cultivate essential soft skills, expand networks, and refine technical prowess. The event strives to turn aspirations into achievements, seamlessly blending innovation with expertise to shape the leaders of tomorrow.</div>


                    <div className="text-white text-justify p-8">
                    Venue: PES University RR Campus, Bangalore
                    </div>
                </div>
                <div className="grid place-items-center">
                <div className='md:w-[16vw] w-[34vw]'>
                    <Image
                        src={mesh}
                    />
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTheEvent