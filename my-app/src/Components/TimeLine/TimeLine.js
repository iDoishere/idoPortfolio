import React from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import TimeLineP from './TimeLineP/TimeLineP';




function TimeLine({education}) {
    return (
        <div>
 <Timeline>
       {
         education.map((info,index) => {
           return (
             <TimeLineP
             schoolName = {info.UniversityName}
             specialization={info.specialization}
             achievements = {info.Achievements}
             achievements2 = {info.Achievements2}
             time={info.Time}
             color = {info.Color}
             ifcolor = {info.ifColor}
             />
           )   
         })
       }  
</Timeline> 
        </div>
    )
}

export default  TimeLine;





 