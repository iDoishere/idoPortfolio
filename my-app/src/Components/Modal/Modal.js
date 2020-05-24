import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import ImageGallery from '../ImageGallery/ImageGallery'


const  ModalUi = (props) => {
 
    return (
      <div >
        <Modal  size="lg" show={props.show} onHide={props.close}  >
          <Modal.Header    closeButton>
            <Modal.Title>Image Gallery</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ImageGallery finalImage={props.finalImage} index={props.index} />                    
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}
export default ModalUi