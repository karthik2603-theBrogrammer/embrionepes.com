'use client'
import React from 'react'
import { HackathonThemesCard, Article } from './HackathonThemesCard'
import TitleComponent from '../HelperComponents/TitleComponent'
import {Link} from 'next/link'
import { Eye } from 'lucide-react'
const HackathonThemes = () => {
  return (
    <div className="flex flex-col w-full h-fit gap-8 py-8 ">
      <TitleComponent titleData="Hackathon Themes" />
      <div class="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-9">
      {
        [1,2,3,4].map((item, index) => (
          <HackathonThemesCard>
            <Article title={'Hackathon Title'} description = {'This is the hackathon Description. More To Come. Embrione loprem lorem korem ksjfkjewkjfwbekjbwkf lknlklkrw lorem loremonewrnwnflkwenfnlekwnflk  lkwnlkfwnflklk ln lkwnflkwefl lkwn lwnelk fnlw nlwenflkewnflewn'} slug = {item}/>
          </HackathonThemesCard>
          
        ))
      }
    </div>
    </div>
  )
}

export default HackathonThemes