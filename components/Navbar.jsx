import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='h-fit w-screen flex items-center justify-center md:justify-end'>
        <Image src='/embrionelogo.png' height={200} width ={200} className = 'md:pr-10 flicker-logo h-[100px] w-[100px] md:h-[200px] md:w-[200px] '/>
    </div>
  )
}

export default Navbar