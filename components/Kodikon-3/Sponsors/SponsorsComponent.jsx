import React from 'react'
import Image from 'next/image'
import TitleComponent from '../HelperComponents/TitleComponent'
import { sponsors } from '@/constants'
const SponsorCard = ({ sponsorName, sponsorImageURL, sponsorWebsiteURL, index }) => {
  return (
    <div className="flex flex-col items-center justify-center p-2  h-100 w-100     "
    data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-delay={`${(index + 1) * 200}`}>
      <Image src={sponsorImageURL} alt={sponsorName} height={500} width={500} className = 'rounded-md' />
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
              <div className="flex md:grid flex-col md:grid-cols-2 items-center justify-center gap-12 p-5 ">
                {sponsor.categorySponsors.map((item, index) => (
                  <SponsorCard key={index} index = {index} sponsorWebsiteURL={item.sponsorWebsiteURL} sponsorImageURL={item.imageUrl} sponsorName={item.name} />
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

