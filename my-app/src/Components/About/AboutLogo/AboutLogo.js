import React from 'react'
import logo from '../../../images/logo.svg'
import logoNode from '../../../images/logoNode.svg'
import logoJs from '../../../images/logoJs.svg'
import html from '../../../images/html5.svg'
import css from '../../../images/css3.svg'

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