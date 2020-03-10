
import React from 'react'
import StickyFooter from 'react-sticky-footer';
import './Footer.css'
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here


const Footer = () => {
    return (
        <div >
            <StickyFooter
                bottomThreshold={100}
                normalStyles={{
                    backgroundColor: "#999999",
                    padding: "2rem",
                    width:'100%',
                  
                }}
                stickyStyles={{
                    backgroundColor: "#999999",
                    padding: "2rem",
                    height:'8%'
                }}
            >
            <p>Design by Ido Cohen</p>
</StickyFooter>
            {/* <ScrollUpButton /> */}
        </div>
    )
}
export default Footer