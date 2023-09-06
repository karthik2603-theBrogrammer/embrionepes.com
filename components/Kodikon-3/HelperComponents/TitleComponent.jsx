import React from 'react'

const TitleComponent = ({titleData}) => {
  return (
    <h1 className="text-white text-center md:text-start text-4xl md:text-6xl font-extrabold ">{titleData}</h1>
  )
}
export default TitleComponent