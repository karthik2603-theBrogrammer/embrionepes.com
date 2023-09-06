import React from 'react'
import TitleComponent from '../HelperComponents/TitleComponent'
import { sponsors } from '@/constants'
const SponsorsComponent = () => {
  return (
    <div className="flex flex-col w-full h-fit gap-6">
      <TitleComponent titleData="Our Sponsors" />
      <div className="w-full h-fit">
        {
          sponsors?.map((sponsor, index) => (
            <div className="text-white gap-32">
              <h1 className="w-full text-center text-4xl md:text-5xl my-5">{sponsor.category}</h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-9">
              {sponsor.categorySponsors.map((item, index) => (
                <div className="">
                  <h2 className="">{item.name}</h2>
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

export default SponsorsComponent

