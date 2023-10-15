'use client'
import React, { useEffect } from 'react'
import { HackathonThemesCard, Article } from './HackathonThemesCard'
import TitleComponent from '../HelperComponents/TitleComponent'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'

const themes = [
  {
    title: "Fintech",
    description: " Unleash your innovation in the world of finance and technology. From insurance and tax filing to UPI, ONDC, lending, KYC, and neobanks, this theme welcomes groundbreaking solutions that re-imagine the financial landscape. Participants are encouraged to explore these dynamic challenges and opportunities in the finance industry, and drive the future of fintech with fresh, inventive ideas",
  },
  {
    title: "Generative AI",
    description: " Immerse yourself in the fascinating world of Generative AI, where artificial intelligence meets creativity. This theme invites you to explore and craft innovative solutions that leverage AI to generate diverse content, from text and images to music and beyond. Whether you're drawn to HR process optimization, software workflow generation, personalized marketing, developer tools, or any other captivating challenge, Generative AI offers a canvas for your ideas to flourish.",
  },
  {
    title: "Healthcare",
    description: "In the ever-evolving world of Healthtech, where technology meets healthcare to transform lives, this theme invites you to explore and create innovative solutions that improve patient care, streamline healthcare processes, enhance medical diagnostics, and drive healthcare accessibility. Whether you're passionate about telemedicine, digital health records, wearable devices, medical imaging, or any other aspect of health technology, this is your opportunity to make a difference in the well-being of individuals and communities.",
  },
  {
    title: "Retail",
    description: "Embrace the world of retail innovation, where technology and consumer experiences converge. From enhancing online shopping experiences and supply chain optimization and in-store innovations and integrating augmented and virtual reality for immersive shopping experiences, there are boundless opportunities to revolutionize how people shop and businesses operate. Whether you're passionate about e-commerce, retail analytics, sustainable retail practices, or any other facet of the retail industry, this theme offers a platform for your ideas to flourish.",
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
      <TitleComponent titleData="Hackathon Themes" id="theme" />
      <div ref={themeGrid} className="w-full grid grid-cols-1 md:grid-cols-2 gap-9">
        {
          themes.map((item, index) => (
            <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y:50 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 1 }}
            >
              <HackathonThemesCard>
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