import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { BsGoogle } from 'react-icons/bs';
import { Eye } from 'lucide-react';

const EventTimelineComponent = ({eventTitle, eventDescription, eventTimings, miscellaneous}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        color: "#fff",
        border: "2px solid #2d2c34"
      }}
      contentArrowStyle={{ borderRight: "7px solid  #1d1836" }}
      date={'6AM-9AM'}
      iconStyle={{ background: '#fff' }}
      icon={
        <div className=' w-full h-full'>
          <Eye size='90px'/>
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>Event Name</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          Event Description
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

