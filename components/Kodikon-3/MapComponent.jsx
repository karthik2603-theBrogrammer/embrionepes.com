"use client"
import { MapPin, ArrowUpRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import TitleComponent from './HelperComponents/TitleComponent';

const Map = () => {
  return (
    <>
    <TitleComponent titleData={'Event Location'} />
    <Link href={'https://maps.app.goo.gl/8GEdKPEDP3bF8yrC9'} target='_blank' className='w-fit bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-5 flex gap-5 justify-between items-center text-white cursor-pointer md:scale-110 md:hover:scale-125 hover:scale-105 duration-100'>
        <MapPin size={50} />
        <div className='flex flex-col justify-between items-center'>
            <div>PES University</div>
            <div>Bangalore, Karnataka</div>
        </div>
        <ArrowUpRight size={25}/>
    </Link>
    </>
  );
};

export default Map;