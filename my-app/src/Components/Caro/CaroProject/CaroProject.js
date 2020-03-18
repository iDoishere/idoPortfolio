import React from 'react'
import './CaroProject.scss'
import weather from '../../../images/weather.png'
import shopping from '../../../images/shopping1.png'
import chatpic from '../../../images/chatpic.png'


function CaroProject({ name, img, index, logos, moreImages, gitLink, live, role, description }) {
  let finalImage = '';


  if (index === '0') {
    finalImage = shopping;
  }
  if (index === '1') {
    finalImage = weather;
  }
  if (index === '2') {
    finalImage = chatpic;
  }
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
         <img alt="smiely" className="main-card--img" variant="top" src={finalImage} />
         <div className="img__description_layer">
           <h6 className='img__description_layer-role'> {role} </h6>
           <div >
             <h6>Tools</h6>
             <div className='img__description_layer-logo'>
               {allLogos}
             </div>
           </div>
           {/* <p className="img__description_layer-description">{description}</p> */}
         </div>
       </div>
       <div className='main-card_side main-card_side--back main-card_side--back-1'>
         <div className='main-card_side--back-text'>
           <p>
             {description}
           </p>
         </div>
         {/* <button hreFf={gitLink} className="button">Git</button> */}
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
 