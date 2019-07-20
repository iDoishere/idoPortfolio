import React from 'react'
import './Caro.css'
import CaroProject from '../Caro/CaroProject/CaroProject'

function Caro({ resumePortfolio, moreImages }) {

  return (

    <div className="list" >
      {
        resumePortfolio.map((project, index) => {
          console.log(project)
          return (
            <div className="listProjects" key={index}>
              <CaroProject
                name={project.name}
                description={project.description}
                img={project.imgurl}
                // index={index}
                index={project.index}
                gitLink={project.gitLinkGit}
                live={project.live}
                moreImages={() => { moreImages(index) }}
              />
            </div>
          )
        })
      }
    </div>



  )
}
export default Caro;