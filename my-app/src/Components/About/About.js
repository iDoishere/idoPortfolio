import React from 'react'
import Plx from 'react-plx';
import resume from '../../images/resume.pdf'
import AboutLogo from './AboutLogo/AboutLogo'
import './About.css'

function About({ resumeData, sortProjects }) {
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
          <div className="my-data">

            <p> {resumeData.name} </p>
            <p> {resumeData.address}</p>
            <p> {resumeData.email}  </p>

          </div>
          <div className="resumeDiv">
            <a className="Resume" href={resume}>Resume</a>
          </div>
        </div>
      </div>
      {/* <AboutLogo sortProjects={sortProjects}/>      */}
      <div>
      </div>
    </div>

  )
}
export default About