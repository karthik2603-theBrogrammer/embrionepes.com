import React from 'react'
import Image from 'next/image'
import TitleComponent from '../HelperComponents/TitleComponent'
import { sponsors } from '@/constants'
const SponsorCard = ({ sponsorName, sponsorImageURL, sponsorWebsiteURL }) => {
  return (
    <div className="flex flex-col items-center justify-center p-2  h-100 w-100 rounded-lg hover:scale-150 transition ease-out duration-200  heartbeat ">
      <Image src={sponsorImageURL} alt={sponsorName} height={200} width={200} />
    </div>
  )
}
const SponsorsComponent = () => {
  return (
    <div className="flex flex-col w-full h-fit gap-6">
      <TitleComponent id="sponser" titleData="Our Sponsors" />
      <div className="w-full h-fit flex flex-col items-center justify-center gap-32 ">
        {
          sponsors?.map((sponsor, index) => (
            <div className="text-white py-9 " key={index}>
              <h1 className="w-full text-center text-4xl md:text-5xl my-5">{sponsor.category}</h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-9">
                {sponsor.categorySponsors.map((item, index) => (
                  <div className="grid grid-cols-3 place-items-center gap-x-8">
                    <SponsorCard sponsorWebsiteURL={item.sponsorWebsiteURL} sponsorImageURL={item.imageUrl} sponsorName={item.name} />
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

