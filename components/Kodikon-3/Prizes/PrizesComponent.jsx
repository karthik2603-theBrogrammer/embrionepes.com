import React from 'react'
import TitleComponent from '../HelperComponents/TitleComponent'
import { sponsors } from '@/constants'
import Image from 'next/image'

const PrizeCard = ({ source, index}) => {
  return (
    <div className=" h-[200px] w-[200px]"
    data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-delay={`${(index + 1) * 200}`}>
          <Image src={source} alt = {`${index + 1}`} height={800} width={800} className = ' bg-transparent'/>
        </div>
  )
}


const PrizesComponent = () => {
  return (
    <div className="flex flex-col w-full h-fit gap-6">
      <TitleComponent titleData="Prizes in Store!" />
      <div className="w-full h-fit flex flex-col md:grid md:grid-cols-3  place-items-center my-16 gap-9 md:gap-0 ">
          <PrizeCard index={1}  source = {'/Kodikon3/prizes/first.png'} />
          <PrizeCard index={2}  source = {'/Kodikon3/prizes/second.png'}/>
          <PrizeCard index ={3} source = {'/Kodikon3/prizes/third.png'}/>
      </div>

    </div>
  )
}

export default PrizesComponent
