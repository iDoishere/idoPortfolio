import React from 'react';
import './App.css';
 import Par from './Components/Par/Par'
import resumeData from './ResumeData';

function App() {
  return (
  
   <Par  resumeData={resumeData}/>
    
  );
}

export default App;
