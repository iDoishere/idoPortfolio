import React from 'react'
import { TimelineItem } from 'vertical-timeline-component-for-react';
import './TimeLineP.scss'
 
import htmllogo from '../../../assets/logos/htmllogo.png'
import csslogo from '../../../assets/logos/csslogo.png'
import sasslogo from '../../../assets/logos/sasslogo.png'
import jslogo from '../../../assets/logos/jslogo.png'
import reactlogo from '../../../assets/logos/reactlogo.png'
import reduxlogo from '../../../assets/logos/reduxlogo.png'
import nodelogo from '../../../assets/logos/nodelogo.png'
 
function TimeLineP({ schoolName, specialization, achievements, time, schoolName2, achievements2, ifcolor, logos }) {

const arr = [];

arr.push(htmllogo,csslogo,sasslogo,jslogo,reactlogo,reduxlogo,nodelogo)
 

  return (
    <div>
      <TimelineItem
        dateInnerStyle={{ background: '#000' }}
        bodyContainerStyle={{
          background: '#f1f1f1',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          width: '100%'
        }}
        key="001"
        dateText={time}>

        <h4 className={'schoolName'}>{schoolName}</h4>
        <h5 className={'schoolName'}>{schoolName2}</h5>

        <div className='timeline-content'>
          {
           ifcolor === 1 ?
            
                arr.map((val, i) => {
                  return (
                    <img key={i} alt="smiely" className='timeline-content-front-logos-all' src={val}></img>
                  )
                }) 
             
            :<p className='achievements'>{achievements}</p>
           }
        </div>
      </TimelineItem>
    </div>
  )
}

export default TimeLineP;