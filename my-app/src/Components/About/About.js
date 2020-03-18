import React from 'react'
import resume from '../../images/idocv.pdf'
import './About.scss'


function About({ resumeData }) {

  return (
    <div className="about">
      <div className="about-title">
        <h4 className="about-title-text">About Me</h4>
        <p className='about-title1-content'>{resumeData.roleDescription}</p>
      </div>
      <div className="about-title1">
        <div className="my-data">
          <h4 className="about-title-text">Contact Details</h4>
          <a href="!#"  className='about-title1-content'> {resumeData.name} </a>
          <a href="!#" className='about-title1-content'> {resumeData.address}</a>
          <a href="!#" className='about-title1-content'> {resumeData.email}  </a>
        </div>
      </div>
      <div className="resume-div">
        <a className="resume-div-file" href={resume}>Resume</a>
      </div>
    </div>
  )
}
export default About