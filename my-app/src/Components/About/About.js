import React from 'react'
 
import resume from '../../images/resume.pdf'
import AboutLogo from './AboutLogo/AboutLogo'
import './About.scss'

function About({ resumeData, sortProjects }) {

  return (
    <div>
      <div className="about">
        <div className="about-title">
          <h3 className="about-title-text">About Me</h3>
          <p>{resumeData.roleDescription}</p>
        </div>
        <div >
          <h3 className="about-title-text">Contact Details</h3>
          <div className="my-data">
            <h6> {resumeData.name} </h6>
            <h6> {resumeData.address}</h6>
            <h6> {resumeData.email}  </h6>
          </div>
  
        </div>
    
        <div className="resume-div">
        <a className="resume-div-file" href={resume}>Resume</a>
         
        </div>
      </div>
  {/* <AboutLogo sortProjects={sortProjects}/>        */}
      <div>
      </div>
    </div>

  )
}
export default About