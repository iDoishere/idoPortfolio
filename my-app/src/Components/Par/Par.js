import React, { useState, useEffect } from 'react';
import './Par.scss'
import ResumeData from '../../ResumeData'
import Caro from '../Caro/Caro'
import TimeLine from '../TimeLine/TimeLine'
import ScrollUp from '../ScrollUp/ScrollUp'
import Stars from '../Stars/Stars'
import MainFooter from '../MainFooter/MainFooter'
import Modal from '../Modal/Modal'
import axios from '../../axios/axios'


const Par = () => {
  const [dataProjects, setArrProjects] = useState([]);
  const [education, setEducationa] = useState([]);
  const [ifModal, setModal] = useState(false);
  const [index, setIndex] = useState(0);


  const scrollEvent = () => {
    var navbar = document.getElementsByClassName("navbar-off")[0];
    var sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    let date = new Date();
    date.setHours(date.getHours() + 2)
    // axios.post('people.json', date)
    //   .then(response => {
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   });
  }, [])


  useEffect(() => {
    setArrProjects(ResumeData.portfolio)
  }, []);
  useEffect(() => {
    setEducationa(ResumeData.education)
  }, []);

  const moreImages = (e, updatedIndex) => {
    e.preventDefault()
    setModal(ifModal => !ifModal)
    setIndex(index => updatedIndex);
  }

  const handleClose = () => {
    setModal(ifModal => !ifModal)
  }

  const scrollToDiv = (val) => {
    let obj = document.getElementsByClassName(val)[0];
    window.scrollTo({
      behavior: "smooth",
      top: obj.offsetTop
    });
  }
  return (
    <div>
      <Stars
        scrollToDiv={scrollToDiv}
      />
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
        index={index}
        close={handleClose}
        show={ifModal}
      />
        : ''}
      <div className="contact-div">
        <MainFooter />
      </div>
      <ScrollUp />
    </div>
  )
}
export default Par;