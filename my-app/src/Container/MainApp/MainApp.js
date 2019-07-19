import React, { Component } from 'react'
import Par from '../../Components/Par/Par'
import { ParallaxProvider } from 'react-scroll-parallax';
import resumeData from '../ResumeData';

 class MainApp extends Component {    
    render() {
        return (
    <div>             
   <ParallaxProvider>
   <Par  resumeData ={resumeData}
   />
    </ParallaxProvider>             
    </div>
        )
    }
}
export default  MainApp;