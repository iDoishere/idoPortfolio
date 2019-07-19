import React from 'react'
import Gallery from "react-photo-gallery";
import googleLogo from '../../images/google1.png'
import firstShoppingLogo from '../../images/firstshoplogo.png'
import secshoplogo from '../../images/secshoplogo.png'
import thirdshoplogo from '../../images/thirdshoplogo.png' 
import fourshoplogo from '../../images/fourshoplogo.png'
import shopping1 from '../../images/shopping1.png'
import youtubelogo from '../../images/youtubelogo.png'
import firstimageupload from '../../images/firstimageupload.png' 
import secimageupload from '../../images/secimageupload.png'
import thirdimageupload from '../../images/thirdimageupload.png'


import './ImageGallery.css'

function ImageGalleryUi({finalImage,index}) {
    let photos=null;
    if(index === 0 ){
          photos = [
            {
              src:   googleLogo ,
              width: 4,
              height: 3,
              
            },
          
          ];
    }
    if(index===1){
          photos = [
          
            {
              src:  firstShoppingLogo ,
              width: 4,
              height: 3
            },
            {
              src:  secshoplogo ,
              width: 1,
              height: 1
            },
            {
              src:  thirdshoplogo ,
              width: 1 ,
              height: 1
            },
            {
              src:  fourshoplogo ,
              width: 1,
              height: 1
            },
            {
              src:  shopping1 ,
              width: 1,
              height: 1
            },
         
          ];
    }
    if(index===2){
      photos = [
      
        {
          src:  firstimageupload ,
          width: 4,
          height: 3
        },
        {
          src:  secimageupload ,
          width: 1,
          height: 1
        },
        {
          src:  thirdimageupload ,
          width: 1 ,
          height: 1
        } 
     
      ];
}

if(index===3){
  photos = [ 
    {
      src:  youtubelogo ,
      width: 4,
      height: 3
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