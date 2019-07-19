import React from 'react'
import { Card } from 'react-bootstrap';
import './CaroProject.css'
import secimageupload from '../../../images/secimageupload.png'
import shopping from '../../../images/shopping1.png'
import google1 from '../../../images/google1.png'
import youtubelogo from '../../../images/youtubelogo.png'
import chatpic from '../../../images/chatpic.png'


function CaroProject({ name, img, index, description, moreImages, gitLink, live }) {
  let finalImage = '';

  if (index === 0) {
    finalImage = google1;

  }
  if (index === 1) {
    finalImage = shopping;

  }
  if (index === 2) {
    finalImage = secimageupload;
  }
  if (index === 3) {
    finalImage = youtubelogo;
  }
  if (index === 4) {
    finalImage = chatpic;
  }

  return (
    <div>

      <Card style={{ width: '18rem' }} >
        <div className="card img__wrap">
          <Card.Img alt="smiely" className="img__img" variant="top" src={finalImage} />
          <div className="img__description_layer">

            <p className="description">{description}</p>

          </div>
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div className="btns">
            <a href={gitLink} className="button">Git</a>
            <a href={live} className="button">Live</a>
            <a onClick={moreImages} className="button">Images</a>
          </div>

        </Card.Body>
      </Card>

    </div>

  )
}
export default CaroProject;