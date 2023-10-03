import React from 'react'
import TitleComponent from '../HelperComponents/TitleComponent'
import { sponsors } from '@/constants'

const PrizeCard = ({ prizeName, prizeImage, prizeAmount }) => {
  return (
    <div className=""></div>
  )
}


const PrizesComponent = () => {
  return (
    <div className="flex flex-col w-full h-fit gap-6">
      <TitleComponent titleData="Prizes in Store!" />
      <div className="w-full h-fit flex flex-col items-center justify-center gap-32 ">
        {
          sponsors?.map((sponsor, index) => (
            <div className="text-white py-9 " key={index}>
              <h1 className="w-full text-center text-4xl md:text-5xl my-5">{sponsor.category}</h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-9">
                {sponsor.categorySponsors.map((item, index) => (
                  <div className="grid grid-cols-3 place-items-center gap-x-8">
                    <PrizeCard/>
                  </div>
                ))}
              </div>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default PrizesComponent
