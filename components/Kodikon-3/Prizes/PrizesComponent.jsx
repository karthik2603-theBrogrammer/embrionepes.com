import React from 'react'
import TitleComponent from '../HelperComponents/TitleComponent'
import { sponsors } from '@/constants'

const PrizeCard = ({ prizeName, prizeImage, prizeAmount , index}) => {
  return (
    <div className="bg-red-100 h-[200px] w-[200px]"
    data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-delay={`${(index + 1) * 200}`}></div>
  )
}


const PrizesComponent = () => {
  return (
    <div className="flex flex-col w-full h-fit gap-6">
      <TitleComponent titleData="Prizes in Store!" />
      <div className="w-full h-fit flex flex-col md:grid md:grid-cols-3 gap-32 place-items-center p-16 ">
          <PrizeCard index={1}/>
          <PrizeCard index={2}/>
          <PrizeCard index = {3}/>

      </div>

    </div>
  )
}

export default PrizesComponent
