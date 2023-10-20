'use client'

// ReadMe: Here the Banner provided by the team will be placed. Measure the right Aspect Ratio and fit the banner into
// the screen.
import React from 'react'
import { copyofcopy, leftguy, rightguy, fourteen, fifteen } from "@/public/Kodikon3";
import Image from 'next/image';

const HeroComponent = () => {
  return (
    <>
      <div className='relative md:top-24 md:h-[100vh]  md:w-[100vw]  mt-9 flex flex-row items-center justify-between'>
        <div className='relative top-[2px]'>
          <Image
            src={leftguy}
            alt=""
            data-aos="fade-in-left"
        data-aos-duration="2500"
            className='h-[100%]'
          />

        </div>
        <div className='flex flex-col items-center'>
          <div className='absolute md:relative my-auto bottom-32 md:bottom-0 px-2 z-200'>
            <Image
              src={copyofcopy}
              alt="Kodikon 3.0"
              className='h-fit w-fit '
              data-aos="fade-in"
        // data-aos-duration="500"
            />
          </div>
          {/* <div className='top-0 absolute flex flex-row justify-around items-center w-[90vw] h-[90vh] '>
            <div className='w-[20vw]'>
              <Image
                src={fifteen}
                className='relative z-100'
                alt=""
                data-aos="fade-in"
        data-aos-duration="500"
        data-aos-delay='1000'
              />
            </div>
            <div className='w-[16vw]'>
              <Image
                src={fourteen}
                className='relative z-100'
                alt=""
                data-aos="fade-in"
        data-aos-duration="500"
        data-aos-delay = '1000'
              />
            </div>
          </div> */}
        </div>
        <div className='relative -z-300'>
          <Image
            src={rightguy}
            alt=""
            className='h-[100%]'
            data-aos="fade-in-right"
        data-aos-duration="2500"
          />
        </div>
      </div>
    </>
  )
}

export default HeroComponent