import React, { useState, useEffect, useRef } from 'react';

import './Par.scss'

import ResumeData from '../../Container/ResumeData'
import Caro from '../Caro/Caro'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import TimeLine from '../TimeLine/TimeLine'
import Modal from '../Modal/Modal'
import Footer from '../Footer/Footer'
import Stars from '../Stars/Stars'
const Par = () => {
  const [data, setArr] = useState('');
  const [dataProjects, setArrProjects] = useState([]);
  const [education, setEducationa] = useState([]);
  const [ifModal, setModal] = useState(false);
  const [index, setIndex] = useState(0);


  useEffect(() => {
     window.addEventListener('scroll', scrollEvent);
    setArr(ResumeData);
  },[])
  useEffect(() => {
    setArrProjects(ResumeData.portfolio)
  }, []);
  useEffect(() => {
    setEducationa(ResumeData.education)
  }, []);

  const moreImages = (updatedIndex) => {
    console.log('aadas')
    setModal(ifModal => !ifModal)
    setIndex(index => updatedIndex);
  }
  const handleClose = () => {
    setModal(ifModal => !ifModal)
  }
  const setScroll = (val) => {
    let obj = document.getElementsByClassName(val)[0];
    if (obj) {
      window.scrollTo({
        behavior: "smooth",
        top: obj.offsetTop
      });
    }
  }
  const scrollEvent = () => {
    var navbar = document.getElementsByClassName("navbar-off")[0];
    var sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
  return (
    <div>
      <nav className="navbar-off">
        <ul className='navbar-off-ul'>
          <li className="navbar-off-li"><a className='navbar-off-a' onClick={() => {
            setScroll('navbar-off')
          }}
          >HOME</a></li>
          <li className="navbar-off-li"><a className='navbar-off-a' onClick={() => {
            setScroll('projects-div')
          }}>PROJECTS</a> </li>
          <li className="navbar-off-li"><a className='navbar-off-a' onClick={() => {
            setScroll('education-div')
          }}>EDUCATION</a> </li>

        </ul>
      </nav>
      {/* <Navbar /> */}
      <Stars data={data} />
      <div className='projects-div'>
        <Caro

          data={dataProjects}
          moreImages={moreImages}
        />
      </div>
      <div className='education-div'>
        <TimeLine education={education} />
      </div>
     
      {ifModal ? <Modal
        index={ index}
        close={ handleClose}
        show={ifModal}
        // finalImage={this.state.finalImage}
      />

        : ''}
      {/* <div ref={(MyStoryEduction) => { this.MyStoryEduction = MyStoryEduction; }} >
     
          
        </div>   */}
      <Footer />

    </div>
  )

}

export default Par;