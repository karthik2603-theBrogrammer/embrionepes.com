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
        <div className=''>
          <Image
            src={leftguy}
            alt=""
            className='h-[100%]'
          />

        </div>
        <div className='flex flex-col items-center'>
          <div className='absolute md:relative my-auto bottom-32 md:bottom-0 px-2'>
            <Image
              src={copyofcopy}
              alt="Kodikon 3.0"
              className='h-fit w-fit'
            />
          </div>
          <div className='top-0 absolute flex flex-row justify-around items-center w-[90vw] h-[90vh] '>
            <div className='w-[20vw]'>
              <Image
                src={fifteen}
                className='relative z-100'
                alt=""
              />
            </div>
            <div className='w-[16vw]'>
              <Image
                src={fourteen}
                className='relative z-100'
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=''>
          <Image
            src={rightguy}
            alt=""
            className='h-[100%]'
          />
        </div>
      </div>
    </>
  )
}

export default HeroComponent