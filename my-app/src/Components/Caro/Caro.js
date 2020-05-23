import React from 'react'
import './Caro.scss'
import CaroProject from '../Caro/CaroProject/CaroProject'
import weather from '../../assets/images/weather.png'
import shopping from '../../assets/images/shopping1.png'
import chatpic from '../../assets/images/chatpic.png'
import socialMedia from '../../assets/images/socialmedia.png'

function Caro({ data, moreImages }) {
  const mainImgArray = [];

   mainImgArray.push(shopping,weather, chatpic,socialMedia)

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
                moreImages={(e) => { moreImages(e,index) }}
                logos={project.logos}
                isLive={project.isLive}
                img={project.img}
                tools={project.Tools}
                mainImgArray={mainImgArray}
              /> 
          )
        })
      }
    </div>
 



  )
}
export default Caro;