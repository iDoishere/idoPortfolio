import React from 'react'
import './Caro.scss'
import CaroProject from '../Caro/CaroProject/CaroProject'
import weather from '../../assets/images/weather.png'
import shopping from '../../assets/images/shopping1.png'
import chatpic from '../../assets/images/chatpic.png'

function Caro({ data, moreImages }) {
  const mainImgArray = [];

  mainImgArray.push(weather, shopping, chatpic)

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
                mainImgArray={mainImgArray}
              /> 
          )
        })
      }
    </div>



  )
}
export default Caro;