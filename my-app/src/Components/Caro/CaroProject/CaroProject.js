import React from 'react'
import { Button, Card } from 'react-bootstrap';
import './CaroProject.css'
import secimageupload from '../../../images/secimageupload.png'
import shopping from '../../../images/shopping1.png'
import google1 from '../../../images/google1.png'
import youtubelogo from '../../../images/youtubelogo.png'


function CaroProject({ name, img, index, description, shoplogo, moreImages, gitLinkGit }) {
  let finalImage = '';

  if (index == 0) {
    finalImage = google1;

  }
  if (index == 1) {
    finalImage = shopping;

  }
  if (index == 2) {
    finalImage = secimageupload;
  }
  if (index == 3) {
    finalImage = youtubelogo;
  }

  return (
    <div>
      <div className="aa">
      <Card  style={{ width: '18rem' }}>   
      <div  className="card img__wrap">
      <Card.Img className="img__img" variant="top" src={finalImage}/>
        <div className="img__description_layer">
        <Card.Text>
   <p className="description">{description}</p>
    </Card.Text>
  </div>
      </div>
  <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div className="btns">
          <a className="button">Git</a>
          <a className="button">Live</a>
          <a className="button">Images</a>
          </div>
     
        </Card.Body>
        </Card>
      </div>
    </div>

  )
}
export default CaroProject;