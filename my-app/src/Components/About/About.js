import React from 'react'
import resume from '../../images/idocv.pdf'
import './About.scss'


function About({ resumeData }) {

  return (
    <div className="about">
      <div className="about-title">
        <h3 className="about-title-text">About Me</h3>
        <p>{resumeData.roleDescription}</p>
      </div>
      <div className="about-title1">
        <div className="my-data">
          <h3 className="about-title-text">Contact Details</h3>
          <span> {resumeData.name} </span>
          <span> {resumeData.address}</span>
          <span> {resumeData.email}  </span>
        </div>
      </div>
      <div className="resume-div">
        <a className="resume-div-file" href={resume}>Resume</a>
      </div>
    </div>
  )
}
export default About