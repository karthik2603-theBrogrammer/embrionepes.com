"use client"
import TitleComponent from '../HelperComponents/TitleComponent'
import Lottie from "lottie-react";
import vortex from '../../../assets/kodikon-about-us.json'

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
        <div className='mt-20 h-fit  space-y-6'>
            <TitleComponent id="about" titleData={"About The Event"} />
            <div className="blue__gradient absolute md:top-[800px]  h-[350px] w-[350px] md:h-[400px] md:w-[450px] z-[-60] " />
            <div className="flex flex-col lg:flex-row items-center justify-center ">
                <p className="text-white text-justify p-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias, ipsam nostrum magni placeat, asperiores nobis a nisi reiciendis cum corrupti nesciunt recusandae, fugiat reprehenderit rerum pariatur quaerat consequuntur amet natus voluptate suscipit laudantium id quis dolore. Ducimus ab quo laboriosam odit ipsa sint nostrum repellendus iusto perferendis esse cumque odio tenetur ut nemo aperiam praesentium unde aliquam et iure sapiente dolor qui, voluptate voluptatem ea. Quae, nesciunt maiores nisi laudantium rem labore culpa amet provident nobis, eveniet doloremque maxime adipisci. Doloribus, ipsum voluptate? Voluptas iure nam debitis. Nemo, esse tenetur eius quo qui illo pariatur, beatae exercitationem assumenda dignissimos aperiam error architecto unde quam? Doloribus beatae amet iste at adipisci natus consequuntur quis rerum voluptate. Reiciendis consequatur nisi dignissimos molestiae quo deserunt?</p>
                <div className="grid place-items-center">
                <Lottie
                    loop={true}
                    animationData={vortex}
                    style={{ height: 360, width: 360 }}
                />
                </div>
            </div>
        </div>
    )
}

export default AboutTheEvent