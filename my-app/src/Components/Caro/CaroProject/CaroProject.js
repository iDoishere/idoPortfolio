import React from 'react'
import { Card } from 'react-bootstrap';
import './CaroProject.scss'
import weather from '../../../images/weather.png'
import shopping from '../../../images/shopping1.png'
import google1 from '../../../images/google1.png'
import youtubelogo from '../../../images/youtubelogo.png'
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
      <img className='img-logo' src={val.url}></img>
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
           <a onClick={() => moreImages(index)} className="main-card_side--back-a">Images</a>
         </div>
       </div>
    </div>

  )
}
export default CaroProject;

{/* <Card style={{ width: '18rem' }} >
        <div className="card img__wrap">
          <Card.Img alt="smiely" className="img__img" variant="top" src={finalImage} />
          <div className="img__description_layer">
            <p className="description">{description}</p>
          </div>
        </div>
        <Card.Body className="card-body">
          <Card.Title>{name}</Card.Title>
          <div className="btns">
            <a href={gitLink} className="button">Git</a>
            <a href={live} className="button">Live</a>
            <a onClick={moreImages} className="button">Images</a>
          </div>
        </Card.Body>
      </Card> */}