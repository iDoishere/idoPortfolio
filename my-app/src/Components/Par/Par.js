import React, { useState, useEffect, useRef } from 'react';

import './Par.scss'

import ResumeData from '../../Container/ResumeData'
import Caro from '../Caro/Caro'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import TimeLine from '../TimeLine/TimeLine'
import Navbar from '../Navbar/Navbar'
import Stars from '../Stars/Stars'
const Par = () => {
  const [data, setArr] = useState('');
  const [dataProjects, setArrProjects] = useState([]);
  const [education, setEducationa] = useState([]);
 

 

  //   this.state = {
  //     collapsed: false,
  //     ifModal: false,
  //     finalImage: '',
  //     index: null,
  //     data: [],
  //     projectsData: [],
  //     color: 'white'
  //   };
  

  useEffect(() => {
    setArr(ResumeData)
  }, []);
  useEffect(() => {
    setArrProjects(ResumeData.portfolio)
    console.log()
  }, []);
  useEffect(() => {
    setEducationa(ResumeData.education)
    console.log()
  }, []);
  const scrollToContent2 = ( ) => {
    let obj = document.getElementsByClassName('code')[0];
    if (obj) {
      window.scrollTo({
        behavior: "smooth",
        top: obj.offsetTop    
      });
    }
  }
  const myFunction = () => {
    var navbar = document.getElementsByClassName("navbar-off")[0];
    console.log(window.pageYOffset)
    var sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
useEffect(() => {
    window.addEventListener('scroll', myFunction)
})
  return (

    <div>
      <nav className="navbar-off">
        <ul className='navbar-off-ul'>
          <li className="navbar-off-li"><a className='navbar-off-a' 
          >HOME</a></li>
          <li className="navbar-off-li"><a className='navbar-off-a' onClick={() => {
            scrollToContent2()   
          }}>PROJECTS</a> </li>

        </ul>
      </nav>
      {/* <Navbar /> */}
      <Stars data={data} />
      <div className='code'>
        <Caro  
          scrollToContent2={scrollToContent2}

          data={dataProjects}
        // moreImages={this.moreImages}
        />
      </div>
      <TimeLine education={ education} />
      {/* <div ref={(MyStoryEduction) => { this.MyStoryEduction = MyStoryEduction; }} >
     
          
        </div>   */}
      {/* <Footer /> */}

    </div>
  )

}

export default Par;