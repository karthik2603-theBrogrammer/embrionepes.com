import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { BsGoogle } from 'react-icons/bs';
import {  MonitorPlay, MonitorX, Layers, Mic2, TerminalSquare } from 'lucide-react';

const iconArray = [<MonitorPlay size='90px'/>, <MonitorX size='90px'/>, <Layers size='90px'/>, <Mic2 size='90px'/>, <TerminalSquare size='90px'/>]
const EventTimelineComponent = ({ eventTitle, eventDescription, eventTimings, miscellaneous,index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        color: "#fff",
        border: "2px solid #2d2c34",
        boxShadow: "0 0 18px 1px #214d76"
      }}
      contentArrowStyle={{ borderRight: "7px solid  #1d1836" }}
      date={eventTimings}
      iconStyle={{ background: '#fff' }}
      icon={
        <div className=' w-full h-full'>
          {iconArray[index]}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[25px] md:text-[30px] font-bold'>{eventTitle}</h3>
        <p
          className='text-secondary text-[16px] font-semibold pt-5'
          style={{ margin: 0 }}
        >
          {eventDescription}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {/* {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))} */}
      </ul>
    </VerticalTimelineElement>

  )
}

export default EventTimelineComponent

