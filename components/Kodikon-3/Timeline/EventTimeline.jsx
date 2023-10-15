'use client'
import React, { useEffect, useState } from 'react'
import TitleComponent from '../HelperComponents/TitleComponent'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import EventTimelineComponent from './EventTimelineComponent';
import { kodikonEvents } from '@/constants';

const EventTimeline = () => {
  return (
    <div id="#timeline" className="flex flex-col w-full gap-y-9" >
      <TitleComponent titleData="Kodikon 3.0 Timeline" id="timeline" />
      <VerticalTimeline lineColor='#fff'>
        {
          kodikonEvents?.map((event, index) => (
            <EventTimelineComponent key={index} index = {index} eventTitle={event.eventTitle} eventTimings={event.eventTimings} eventDescription={event.eventDescription} miscellaneous={event.miscellaneous} />
          ))
        }
      </VerticalTimeline>
    </div>
  )
}

export default EventTimeline

