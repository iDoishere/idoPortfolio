
import React, { useState } from 'react';
import apiClient from '../../axios/axios'
import './MainFooter.scss'
import logoGithub from '../../assets/logos/github-icon.svg'
import logoLinkedin from '../../assets/logos/linkedin-icon.svg'
import ScrollAnimation from 'react-animate-on-scroll';
import resumeData from '../../ResumeData'
const MainFooter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');
  const [hidden, setHidden] = useState(false);

  function validateEmail() {
    let emailCheck =false;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailCheck = re.test(String(email).toLowerCase());
     
     if(emailCheck){
       return emailCheck;
     }else{
      document.querySelector('.input-email').style.border = '1px solid red';
      return emailCheck;
     }
}


  const inputCheck = () => {
    let ifRed = true;
    if (name.length === 0) {
      document.querySelector('.input-name').style.border = '1px solid red';
      ifRed = false;
    } else {
      document.querySelector('.input-name').style.border = '1px solid gray'
    }
    if (email.length === 0) {
      document.querySelector('.input-email').style.border = '1px solid red';
      ifRed = false;
    }
    
    return ifRed;
  }

  const sendToFirebase = (e) => {

    let answer = inputCheck();
    let emailCheck = validateEmail()
    if (answer && emailCheck) {
      const obj = { name, email, message }


      apiClient.sendToFire(obj)
      .then(res => {
        if (res.status === 200) {
          setHidden(true)
          var loader = document.querySelector('.loader'),
            check = document.querySelector('.check');
          loader.classList.add('active');
          loader.addEventListener('animationend', function () {
            check.classList.add('active');
          });
          setTimeout(()=> {
            loader.classList.remove('active');
            check.classList.remove('active');
          },5000)
        }
      }).catch(error => {
        var answer = document.querySelector('.user-answer');
        answer.style.color = 'red'
        answer.innerText = 'server issues'
      })
    }
  }


  function getScrollAnimationtitle() {
    return (
    <ScrollAnimation duration={4} animateIn="hinge" animateOut="hinge">
      <h4 className='mainf-sec-col-1-title'>Send A Message</h4>
    </ScrollAnimation>)
  }


  return (
    <div className='mainf'>
      <div className="mainf-sec">
        <div className='mainf-sec-col-1'>
          {getScrollAnimationtitle()}

          <input required placeholder='Your Name' className='input-name' type='text'
            onChange={e => {
              setName(e.target.value)
            }}
          ></input>
          <input placeholder='Your Email' className='input-email' type='text' onChange={e => {
            setEmail(e.target.value)
          }} />
          <textarea placeholder='Message ' onChange={e => {
            setMessage(e.target.value)
          }}></textarea>

          <button onClick={sendToFirebase} className="button">Send</button>
          {hidden ?
            <div className="loader">
              <div className="check">
                <span className="check-one"></span>
                <span className="check-two"></span>
              </div>
            </div> : <h5 className='user-answer'></h5>
          }
        </div>
        <div className='mainf-sec-col-2'>
          <h3 className='mainf-sec-col-2-title'>Get in Touch</h3>
          <p className='mainf-sec-col-2-paragraph'> {resumeData.sos} </p>
          <div className='mainf-sec-col-2-div-logo'>
            <a target="_blank" href="https://github.com/iDoishere?tab=repositories">
              <img className='mainf-sec-col-2-div-logo-git' alt="smiley" src={logoGithub} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/ido-cohen-32617816b/">
              <img className='mainf-sec-col-2-div-logo-linkedin' alt="smiley" src={logoLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFooter