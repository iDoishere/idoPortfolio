
import React from 'react'
import StickyFooter from 'react-sticky-footer';
import './Footer.css'
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
 

 const Footer = () => {
    return (
        <div className="footer">
    <StickyFooter className="footer"
    bottomThreshold={40} 
    normalStyles={{
    backgroundColor: "#999999",
    padding: "0.5rem"
    }}
    stickyStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    padding: "0.5rem"
    }}
>
    <div className="divFooter">
    <p className="footerText">Designed By Ido Cohe<span className="span">n</span></p>
   </div>
</StickyFooter>

<ScrollUpButton />
        </div>
    )
}
export default Footer