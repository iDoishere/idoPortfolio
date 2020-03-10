import React from 'react'
import About from '../About/About'
import './Stars.scss'

export default function Stars({data}) {
   console.log(data)
    return (
        <div>
            <div id="background">
            <div id="background1"></div>
            </div>
         
            <div id="page-wrap">
                <div className="mainInfo">
                    <div class="typewriter">
                        <h1>Im Ido Cohen</h1>
                    </div>
                    <h4 className="mainInfo-title2">Full Stack Developer</h4>
                    <p className="mainInfo-title3">HTML/SASS | Jquery | JavaScript | React / Redux / Hooks | NodeJS | Express | MongoDB</p>
                </div>
               <About   resumeData={data}   />

            </div>
        </div>
    )
}
