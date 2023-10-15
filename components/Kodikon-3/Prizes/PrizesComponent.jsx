import React from 'react'
import TitleComponent from '../HelperComponents/TitleComponent'
import { sponsors } from '@/constants'

const PrizeCard = ({ prizeName, prizeImage, prizeAmount }) => {
  return (
    <div className="bg-red-100 h-[200px] w-[200px]"></div>
  )
}


const PrizesComponent = () => {
  return (
    <div className="flex flex-col w-full h-fit gap-6">
      <TitleComponent titleData="Prizes in Store!" />
      <div className="w-full h-fit flex flex-col md:grid md:grid-cols-3 gap-32 place-items-center p-16 ">
          <PrizeCard/>
          <PrizeCard/>
          <PrizeCard/>

      </div>

    </div>
  )
}

export default PrizesComponent
