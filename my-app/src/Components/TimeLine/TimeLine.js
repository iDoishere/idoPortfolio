import React from 'react'
import { Timeline }  from 'vertical-timeline-component-for-react';
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
             schoolName2={info.UniversityName2}
             achievements = {info.Achievements}
             time={info.Time}
             color = {info.Color}
             ifcolor = {info.ifColor}
             key={index}
             />
           )   
         })
       }  
</Timeline> 
        </div>
    )
}

export default  TimeLine;





 