'use client'

// ReadMe: Here the Banner provided by the team will be placed. Measure the right Aspect Ratio and fit the banner into
// the screen.
import React from 'react'
import { copyofcopy, leftguy, rightguy, fourteen, fifteen } from "@/public/Kodikon3";
import Image from 'next/image';

const HeroComponent = () => {
  return (
    <>
      <div className='relative top-24 w-[100vw] h-[90vh] mt-9 flex flex-row items-center justify-between'>
        <div className='h-[65vw]'>
          <Image
            src={leftguy}
            alt=""
          />

        </div>
        <div className='flex flex-col items-center'>
          <div>
            <Image
              src={copyofcopy}
              alt="Kodikon 3.0"
            />
          </div>
          <div className='top-0 absolute flex flex-row justify-around items-center w-[90vw] h-[90vh]'>
            <div className='w-[20vw]'>
              <Image
                src={fifteen}
                className=''
                alt=""
              />
            </div>
            <div className='w-[16vw]'>
              <Image
                src={fourteen}
                className=''
                alt=""
              />
            </div>
          </div>
        </div>
        <div className='h-[65vw]'>
          <Image
            src={rightguy}
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default HeroComponent