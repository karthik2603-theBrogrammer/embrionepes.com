'use client'
import React, { useEffect } from 'react'
import { HackathonThemesCard, Article } from './HackathonThemesCard'
import TitleComponent from '../HelperComponents/TitleComponent'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'

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
  const themeGrid = useRef(null);
  const isInView = useInView(themeGrid, { once: true });
  const controls = useAnimation();

  useEffect(()=>{
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView])

  return (
    <div className="flex flex-col w-full h-fit gap-8 py-8 ">
      <TitleComponent titleData="Hackathon Themes" />
      <div ref={themeGrid} class="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-9">
        {
          themes.map((item, index) => (
            <motion.div
                variants={{
                  hidden: { opacity: 0, y:50 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 1 }}
            >
              <HackathonThemesCard key={index}>
                <Article title={item.title} description = {item.description} themeNumber = {` ${index + 1}`} />
              </HackathonThemesCard>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default HackathonThemes