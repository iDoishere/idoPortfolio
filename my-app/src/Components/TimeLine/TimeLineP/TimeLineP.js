import React from 'react'
import {  TimelineItem }  from 'vertical-timeline-component-for-react';
import './TimeLineP.scss'

function TimeLineP({schoolName,specialization,achievements,time,color,achievements2,ifcolor}){

 
    return (
        <div>
 <TimelineItem  
      dateInnerStyle={{ background:  '#000' }}
    bodyContainerStyle={{
        
      background: '#f1f1f1',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
    key="001"
    dateText={time}
    
  >
    <h2 className={'schoolName'}>{schoolName}</h2>
    <h5 className={'schoolName'}>{specialization}</h5>
    <p className="achievements">
    {achievements}
    </p>
    <p className="achievements">
    {achievements2}
    </p> 
  </TimelineItem>
        </div>
    )
}

export default TimeLineP;