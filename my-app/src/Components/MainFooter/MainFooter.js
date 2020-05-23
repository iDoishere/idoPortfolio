
import React, { useState } from 'react';
import axios from '../../axios/axios'
import './MainFooter.scss'
import logoGithub from '../../assets/logos/github-icon.svg'
import logoLinkedin from '../../assets/logos/linkedin-icon.svg'
import ScrollAnimation from 'react-animate-on-scroll';

const MainFooter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');
  const [hidden, setHidden] = useState(false);


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
    } else {
      document.querySelector('.input-email').style.border = '1px solid gray'
    }


    return ifRed;
  }

  const sendToFirebase = (e) => {

    let answer = inputCheck();
    if (answer) {
      const obj = { name, email, message }
      axios.post('contact.json', { obj })
        .then(response => {
          if (response.status === 200) {
            setHidden(true)
            var loader = document.querySelector('.loader'),
              check = document.querySelector('.check');
            loader.classList.add('active');
            loader.addEventListener('animationend', function () {
              check.classList.add('active');
            });
          }
        })
        .catch(error => {
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
          <p className='mainf-sec-col-2-paragraph'>  Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
Simply fill the from and send me an email.</p>
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