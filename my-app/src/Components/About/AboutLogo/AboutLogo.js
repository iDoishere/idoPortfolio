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
            <div className="titleLogo">
                <h1 className="Expertise">Expertise</h1>
            </div>
            <div className="main-logo">
                <div className="leftSide" >
                    <img alt="smiely" width="23%" src={logo} ></img>
                    <img alt="smiely" width="13%" src={logoJs} ></img>
                </div>
                <div className="rightSide" >
                    <img alt="smiely" width="15%" src={html} ></img>
                    <img alt="smiely" width="11%" src={css} ></img>
                </div>
            </div>
            <div className="sortDiv">
                <a className="sort" onClick={() => sortProjects('FRONT-END')}>FRONT-END</a>
                <a className="sort" onClick={() => sortProjects('FULL-STACK')}>Full Stack</a>
                <a className="sort" onClick={() => sortProjects('ALL')}>All</a>
            </div>
        </div>
    )
}
export default AboutLogo;