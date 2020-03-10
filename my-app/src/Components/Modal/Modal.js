import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import ImageGallery from '../ImageGallery/ImageGallery'
import './Modal.css'
class ModalUi extends Component {
  render() {
    const {
      show,
      close,
      finalImage,
      index

    } = this.props;
    return (
      <div >
        <Modal  className='ido' size="lg" show={show} onHide={close}  >
          <Modal.Header    closeButton>
            <Modal.Title>Image Gallery</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ImageGallery finalImage={finalImage} index={index} />                    
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
export default ModalUi