import React, { useState,useEffect } from 'react';
import loadingIcon from './assets/loader.gif'
import './App.css';
import Par from './Components/Par/Par'
import resumeData from './ResumeData';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let element = document.getElementsByClassName("wrapper-loading");
    console.log(element)
    setTimeout(() => {
      element[0].classList.remove("wrapper-loading");
      
      setLoading(false)
    }, 3000)

  }, [])

  return (
    <div>
      {loading ?
        <div  className="wrapper-loading">
        <img src={loadingIcon} alt="" />
      </div>
      : <Par resumeData={resumeData} /> 
    }
  

    </div>


  );
}

export default App;
