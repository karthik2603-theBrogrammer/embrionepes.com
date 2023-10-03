'use client'
import React from 'react'
import { HackathonThemesCard, Article } from './HackathonThemesCard'
import TitleComponent from '../HelperComponents/TitleComponent'

const themes = [
  {
    title: "Theme Number 1",
    description: "This is the hackathon Description. More To Come. Embrione loprem lorem korem ksjfkjewkjfwbekjbwkf lknlklkrw lorem loremonewrnwnflkwenfnlekwnflk  lkwnlkfwnflklk ln lkwnflkwefl lkwn lwnelk fnlw nlwenflkewnflewn",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  }
]

const HackathonThemes = () => {
  return (
    <div className="flex flex-col w-full h-fit gap-8 py-8 ">
      <TitleComponent titleData="Hackathon Themes" />
      <div class="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-9">
        {
          themes.map((item, index) => (
            <HackathonThemesCard key={index}>
              <Article title={item.title} description = {item.description} themeNumber = {` ${index + 1}`} />
            </HackathonThemesCard>

          ))
        }
      </div>
    </div>
  )
}

export default HackathonThemes