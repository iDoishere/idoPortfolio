
import React, { useState } from 'react';
import axios from '../../axios/axios'
import './MainFooter.scss'

const MainFooter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [choose, setChoose] = useState('');
  const [message, setMessage] = useState('');
  const [hidden, setHidden] = useState(false);

  const sendToFirebase = (e) => {
    const obj = { name, email, choose, message }
    console.log(obj)
    axios.post('contact.json', { obj })
      .then(response => {
        if (response.status === 200) {
          setHidden(true)
        }
      })
      .catch(error => {
        console.log(error)
      });
  }

  return (
    <div className='mainf'>
      <div className="mainf-sec">
        <div className='mainf-sec-col-1'>
          <h4 className='mainf-sec-col-1-title'>Send A Message</h4>
          <input placeholder='Your Name' className='input-name' type='text'
            onChange={e => {
              setName(e.target.value)
            }}
          ></input>
          <div className='input-2'>
            <input placeholder='Your Email' className='input' type='text' onChange={e => {
              setEmail(e.target.value)
            }} />
            <span>@</span>
            <input placeholder='CHOOSE' list='browsers' className='input' type='text' onChange={e => {
              setChoose(e.target.value)
            }} />
          </div>
          <datalist id='browsers'>
            <option value="gmail.com"></option>
            <option value="walla.com"></option>
            <option value="outlook.com"></option>
            <option value="Yahoo.com"></option>
            <option value="Aol.com"></option>
          </datalist>
          <textarea placeholder='Message ' onChange={e => {
            setMessage(e.target.value)
          }}></textarea>

          <a href='#!' onClick={sendToFirebase} className="mainf-sec-col-1-send-btn">Send</a>
          {hidden ?
            <img className='confirm' width='15%' src="https://image.shutterstock.com/image-vector/confirmed-rubber-stamp-260nw-1089804863.jpg" alt="" />
            : ''}
        </div>
        <div className='mainf-sec-col-2'>
          <h4 className='mainf-sec-col-2-title'>Get in Touch</h4>
          <p className='mainf-sec-col-2-paragraph'>  Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
Simply fill the from and send me an email.</p>
          <div className='mainf-sec-col-2-div-logo'> 
              <a href="https://github.com/iDoishere?tab=repositories">
              <img className='logo-git'  alt="smiley" src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}/>
             </a>
             <a href="https://www.linkedin.com/in/ido-cohen-32617816b/">
              <img className='logo-linkdin'  alt="smiley" src={'data:image/png;base64,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'}/>
             </a>
          </div>
          </div>
        </div>
      </div>
  )
}

export default MainFooter