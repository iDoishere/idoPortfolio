import React from 'react'
import Coverflow from 'react-coverflow';
import { Button,Card } from 'react-bootstrap';
import CaroProject from '../Caro/CaroProject/CaroProject'
import './Caro.css'
 function Caro({resumePortfolio,moreImages}) {
  
    return (
        <div  >
          <div className="list" >

           
    {
 
      resumePortfolio.map((project,index)=> {
   
        return (
          <div className="listProjects">
      <CaroProject  
           name = {project.name}
           description={project.description}
           img={project.imgurl}
           index={index}
           gitLinkGit={project.gitLinkGit}
           moreImages={() =>{moreImages(index)}}
         
          />           
          </div>  
        )
      })
    
    }
     
          </div>
 

  
        </div>
    )
}
export default Caro;