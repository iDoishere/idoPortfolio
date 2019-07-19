import React from 'react'
import logo from '../../../images/logo.svg'
import logoNode from '../../../images/logoNode.svg'
import logoJs from '../../../images/logoJs.svg'
 
import './AboutLogo.css'

function AboutLogo({sortProjects}) {
    return (
        <div className="mainlogo">
            <div className="titleLogo">
                <h1  className="Expertise">Expertise</h1>
            </div>
            <img  className="imglogo" alt="smiely" width="11%" src={logoNode} ></img>
            <img  className="imglogoAni" alt="smiely" width="12%" src={logo} ></img>
            <img  className="imglogo4" alt="smiely" width="6%" src={logoJs} ></img>
            <img  className="imglogo4" alt="smiely" width="14%" src='https://admin.springsapps.com/uploads/b8be6ab92de3453badd84e3fa62bf0a2.svg' ></img>
            <img  className="imglogo4" alt="smiely" width="9%" src=' http://pardesia-sw.com/wp-content/uploads/2018/12/html-300x300.png' ></img>
            <img  className="imglogo4" alt="smiely" width="9%" src='https://internet-israel.com/cwsd.php?Z3AuPTQ0Mw/NDA/Z3ZgPCp1aGI.png' ></img>
            <img  className="imglogoAni" alt="smiely" width="7%" src='https://cdn.worldvectorlogo.com/logos/redux.svg' ></img>
            <img  className="imglogo4" alt="smiely" width="10.4%" src='https://openebs.io/assets/images/workloads/mongodb-n.png' ></img>
<div className="sortDiv">
<a href="/"  className="sort" onClick={() => sortProjects('FRONT-END')}>FRONT-END</a>
<a  href="/" className="sort" onClick={() => sortProjects('FULL-STACK')}>Full Stack</a>
<a  href="/" className="sort" onClick={() => sortProjects('ALL')}>All</a>
</div>
        </div>
    )
}
export default AboutLogo;