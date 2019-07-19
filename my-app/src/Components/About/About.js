import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import Plx from 'react-plx';
import AboutLogo from '../About/AboutLogo/AboutLogo'
import resume from '../../images/resume.pdf'
import './About.css'
function About({ resumeData,sortProjects }) {
  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          easing: [0.25, 0.1, 0.53, 3],
          startValue: 0,
          endValue: 360,
          property: 'rotate',
        },
      ],
    },
  ];
  return (
    <div>
      <div id="about">
        <div  >
          <Plx
            className='MyAwesomeParallax'
            parallaxData={parallaxData}
          >
            <img className="profilepic" src='https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png' alt="Tim Baker Profile Pic" />
          </Plx>
        </div>
        <div className="titleAbout">
          <h2>About Me</h2>
          <p>{resumeData.roleDescription}</p>
        </div>
        <div className="contact-details">
          <h2 className="contactTitle">Contact Details</h2>
          <p>
            <span>{resumeData.name}</span><br />
            <span>{resumeData.home}<br />
              {resumeData.address}
            </span><br />
            <span>{resumeData.phone}</span><br />
            <span>{resumeData.email}</span>
          </p>
          <div className="resumeDiv">    
       <a className = "Resume" href={resume}>Resume</a>           
          </div>
        </div>
      </div>
      <AboutLogo sortProjects={sortProjects}/>    
      <div>
      </div>
    </div>

  )
}
export default About