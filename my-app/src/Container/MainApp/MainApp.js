import React, { Component } from 'react'
import Par from '../../Components/Par/Par'
 
import resumeData from '../ResumeData';

 class MainApp extends Component {    
    render() {
        return (
                
 
   <Par  resumeData ={resumeData}
   />
             
   
        )
    }
}
export default  MainApp;