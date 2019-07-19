import React from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import './TimeLineP.css'

function TimeLineP({schoolName,specialization,achievements,time,color,achievements2,ifcolor}){

    let status = ifcolor === 0 ? "schoolName" : "schoolName1"
    return (
        <div>
 <TimelineItem  
      dateInnerStyle={{ background: color}}
    bodyContainerStyle={{
        
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
    key="001"
    dateText={time}
    
  >
    <h3 className={status}>{schoolName}</h3>
    <h4 className={status}>{specialization}</h4>
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