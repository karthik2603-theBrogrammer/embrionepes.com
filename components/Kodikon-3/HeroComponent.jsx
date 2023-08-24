'use client'
import React from 'react'
import workingLoader from '../../assets/working-on-kodikon.json'
import Lottie from "lottie-react";
const HeroComponent = () => {
  return (
    <div className='w-full h-[80vh] mt-9 flex flex-col items-center justify-center'>
        <h1 className="text-9xl text-center text-white">Kodikon 3</h1>
        <p className="text-white text-center text-2xl">Stay tuned for more. Coming Soon 📣</p>
        <Lottie
            loop={true}
            animationData={workingLoader}
            // style={{ height: 300, width: 300 }}
            className="h-[300px] w-[300px] md:h-[430px] md:w-[430px] lg:h-[500px] lg:w-[500px]"
          />
    </div>
  )
}

export default HeroComponent