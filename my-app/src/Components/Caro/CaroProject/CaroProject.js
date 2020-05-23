import React, { useState } from 'react';
import './CaroProject.scss'
import ReactCardFlip from 'react-card-flip';

const CaroProject = ({ name, mainImgArray, index, logos, moreImages, gitLink, live, role, description, isLive ,tools}) => {
  const [ifFlip, setIfFlip] = useState(false);

  const handleClick = () => {
    setIfFlip(!ifFlip);
  }

  const allLogos = logos.map((val, i) => {
    return (
      <img   key={i} alt="smiely" className='main-card-front-logo-img' src={val.url}></img>
    )
  })

  return (
    <ReactCardFlip isFlipped={ifFlip} flipDirection="vertical">
      <div className='main-card-front'>
        <div className='main-card-front-header'>
          <h5 className='main-card-val'>{name}</h5>
          <h6 className='main-card-val-role'> {role} </h6>
        </div>
        <div>
          <img width='100%' alt="smiely" className="main-card--img" variant="top" src={mainImgArray[index]} />
        </div>

        <div className='main-card-front-logo'>
          {allLogos}
        </div>
        <div>
          <button className='main-card-front-btn' onClick={handleClick}><span>Click to flip </span></button>
        </div>
      </div>

      <div className='main-card-back'>
        <div className='main-card-back-description'>
          {description}

     
        </div>
        <div className='main-card-back-tools'>
        <span>Tools</span>
        {tools}
        </div>

        <div className='main-card-back-btns'>

          <div className="resume-div1">
            <a className="resume-div1-file1" href={gitLink}>Git</a>
          </div>
          {isLive ? <div className="resume-div1">
            <a className="resume-div1-file1" href={live}>Live</a>
          </div> : ''}

          <div className="resume-div1">
            <a href="!#" onClick={(e) => moreImages(e, index)} className="resume-div1-file1" >Images</a>
          </div>
        </div>

        <div>
          <button  className='main-card-front-btn' onClick={handleClick}>Click to flip</button>

        </div>
      </div>
    </ReactCardFlip>
  )
}
export default CaroProject;
