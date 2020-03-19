import React from 'react'
import './ImageGallery.css'

import Gallery from "react-photo-gallery";
import firstShoppingLogo from '../../assets/images/firstimageupload.png'
import secshoplogo from '../../assets/images/secshoplogo.png'
import thirdshoplogo from '../../assets/images/thirdshoplogo.png'
import fourshoplogo from '../../assets/images/fourshoplogo.png'
import shopping1 from '../../assets/images/shopping1.png'
import firstimageupload from '../../assets/images/weather.png'
import secimageupload from '../../assets/images/weather11.png'
import chat from '../../assets/images/chatpic.png'


function ImageGalleryUi({ index }) {
  let photos = null;
 
  if (index === 0) {
    photos = [

      {
        src: firstShoppingLogo,
        width: 1,
        height: 1
      },
      {
        src: secshoplogo,
        width: 1,
        height: 1
      },
      {
        src: thirdshoplogo,
        width: 1,
        height: 1
      },
      {
        src: fourshoplogo,
        width: 1,
        height: 1
      },
      {
        src: shopping1,
        width: 1,
        height: 1
      },

    ];
  }
  if (index === 1) {
    photos = [

      {
        src: firstimageupload,
        width: 3,
        height: 2
      },
      {
        src: secimageupload,
        width: 3,
        height: 2
      },
    ];
  }
 
  if (index === 2) {
    photos = [
      {
        src: chat,
        width: 1,
        height: 1
      },
    ];
  }
  return (
    <div>
      <Gallery photos={photos} />

    </div>

  )
}
export default ImageGalleryUi;