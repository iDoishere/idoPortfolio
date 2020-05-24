import React from 'react'
import About from '../About/About'
import './Stars.scss'
import ScrollAnimation from 'react-animate-on-scroll';

const Stars =({ data, scrollToDiv }) => {

   const Aux  = (props) => {
         return props.children;
   }

  function getScrollAnimationtitle() {
    return (<ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
      <h4 className="mainInfo-title2">Full Stack Developer</h4>
    </ScrollAnimation>)
  }

  function getScrollAnimationdata() {
    return (<ScrollAnimation animateIn="fadeIn" animateOut="fadeIn">
      <p className="mainInfo-title3">HTML/SASS | Jquery | JavaScript | React / Redux / Hooks | NodeJS | Express | MongoDB</p>
        </ScrollAnimation>)
  }

  const setScroll = (str) => {
    scrollToDiv(str);
  }
  
  return (
    <Aux>
      <div id="background">
        <nav className="navbar-off">
          <ul className='navbar-off-ul'>
            <li className="navbar-off-li"><a href="#!" className='navbar-off-a' onClick={(e) => {
              setScroll('projects-div')
            }}>PROJECTS</a> </li>
            <li className="navbar-off-li"><a href="#!" className='navbar-off-a' onClick={(e) => {
              setScroll('education-div')
            }}>EDUCATION</a> </li>
            <li className="navbar-off-li"><a href="#!" className='navbar-off-a' onClick={(e) => {
              setScroll('contact-div')
            }}>CONTACT</a> </li>
          </ul>
        </nav>
      </div>
      <div id="page-wrap">
        <div className="mainInfo">
          <div className="typewriter">
            <h1>Im Ido Cohen</h1>
          </div>
          <div className="mainInfo-content">
          {getScrollAnimationtitle()}  
          {getScrollAnimationdata()}  
          </div>
        </div>
        <About />
      </div>
    </Aux>
  )
}
export default Stars;