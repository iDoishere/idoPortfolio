import React from 'react'
import resume from '../../assets/resume.pdf'
import './About.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import resumeData from '../../ResumeData'

function getScrollAnimationLink() {
  return (<ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
      <h4 className="about-title-text">About Me</h4>
       </ScrollAnimation>)
}
function getScrollAnimationLink2() {
  return (<ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
      <h4 className="about-title-text">Contact Details</h4>
       </ScrollAnimation>)
}
function About() {

  return (
    <div className="about">
      <div className="about-title">
       {getScrollAnimationLink()}  
        <p className='about-title1-content'>{resumeData.roleDescription}</p>
      </div>
      <div className="about-title1">
        <div className="my-data">
         
          {getScrollAnimationLink2()}  
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