import React from 'react'
import './AboutLogo.css'

function AboutLogo({ sortProjects }) {
    return (
        <div className="mainlogo">
        
            <div className="sortDiv">
                <a className="sort" onClick={() => sortProjects('FRONT-END')}>FRONT-END</a>
                <a className="sort" onClick={() => sortProjects('FULL-STACK')}>Full Stack</a>
                <a className="sort" onClick={() => sortProjects('ALL')}>All</a>
            </div>
        </div>
    )
}
export default AboutLogo;