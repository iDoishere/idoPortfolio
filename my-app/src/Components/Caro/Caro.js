import React from 'react'
import './Caro.scss'
import CaroProject from '../Caro/CaroProject/CaroProject'

function Caro({ data, moreImages }) {
  
  return (

    <div className="list" >
      {
        data.map((project, index) => {
          
          return (
          
              <CaroProject key={index}
                name={project.name}
                description={project.description}
                img={project.imgurl}
                 role={project.role}
                index={project.index}
                gitLink={project.gitLinkGit}
                live={project.live}
                moreImages={() => { moreImages(index) }}
                logos={project.logos}
              />
         
          )
        })
      }
    </div>



  )
}
export default Caro;