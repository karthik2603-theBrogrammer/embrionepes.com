import React from 'react'
import TitleComponent from '../HelperComponents/TitleComponent'
import { Eye } from 'lucide-react'
import { Trophy } from 'lucide-react'

const Prize = ({index, backgroundColour, prize}) => {
  return (
    <div
      className={`overflow-hidden relative ${index === 1 ? '' : (index === 2 ? 'md:mt-32' : 'md:mt-64')} duration-700 border rounded-xl ${backgroundColour} backdrop-filter backdrop-blur-sm bg-opacity-30 group md:gap-8 border-zinc-600 mx-12 md:mx-3 flex flex-col items-center justify-center my-9`}
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <div
          className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
        />
        <div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
        />
      </div>

      <article className="p-4 md:p-8 ">
        <div className="flex justify-center gap-2 items-center">

            <Trophy className="w-24 h-24" color='gray' />{" "}
        </div>
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display text-center my-9">
          {index} Place
        </h2>
        <p className="text-center z-20 mt-4 text-lg  duration-1000 text-white group-hover:text-zinc-200 ">
          Rs. {prize}
        </p>
      </article>
    </div>
  )
}

const PrizesComponent = () => {
  return (
    <div className="flex flex-col w-full h-fit gap-6">
      <TitleComponent titleData="Prizes In Store" />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Prize backgroundColour={"bg-[#565656]"} index = {2} prize = {100000}/>
        <Prize backgroundColour={"bg-[#ffbb00]"} index = {1} prize = {100000}/>
        <Prize backgroundColour={"bg-[#503500]"} index = {3} prize = {100000}/>
      </div>
    </div>
  )
}

export default PrizesComponent
