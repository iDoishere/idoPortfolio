import React from 'react'
import './CaroProject.scss'


function CaroProject({ name, mainImgArray, index, logos, moreImages, gitLink, live, role, description }) {


  const allLogos = logos.map((val, i) => {
    return (
      <img key={i} alt="smiely" className='img-logo' src={val.url}></img>
    )
  })
  return (

    <div className='main-card'>
      <div className='main-card_side main-card_side--front'>
        <div className='main-card-name'>
          <h5 className='main-card-name-val'>{name}</h5>
        </div>
        <img alt="smiely" className="main-card--img" variant="top" src={mainImgArray[index]} />
        <div className="img__description_layer">
          <h6 className='img__description_layer-role'> {role} </h6>
          <div >
            <h6>Tools</h6>
            <div className='img__description_layer-logo'>
              {allLogos}
            </div>
          </div>
        </div>
      </div>
      <div className='main-card_side main-card_side--back main-card_side--back-1'>
        <div className='main-card_side--back-text'>
          <p>
            {description}
          </p>
        </div>
        <div className="main-card_side--back-link">
          <a href={gitLink} className="main-card_side--back-a">Git</a>
          <a href={live} className="main-card_side--back-a">Live</a>
          <a href='!#' onClick={() => moreImages(index)} className="main-card_side--back-a">Images</a>
        </div>
      </div>
    </div>
  )
}
export default CaroProject;
