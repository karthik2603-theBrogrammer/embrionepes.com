import React from 'react'

const TitleComponent = ({titleData, id}) => {
  return (
    <h1 id={id} className="text-white text-center md:text-start text-4xl md:text-6xl font-extrabold mx-3 ">{titleData}</h1>
  )
}
export default TitleComponent