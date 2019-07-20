import React, { Component } from 'react'
import { Parallax } from 'react-parallax';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import './Par.css'

import TimeLine from '../TimeLine/TimeLine'
import About from '../About/About';
import Caro from '../Caro/Caro'
import Plx from 'react-plx';
import Modal from '../Modal/Modal'
import Footer from '../Footer/Footer'
import ResumeData from '../../Container/ResumeData'
class Par extends Component {
  constructor(props) {
    super(props);
    this.MyStory = React.createRef();
    this.MyStoryProjects = React.createRef();
    this.MyStoryEduction = React.createRef();
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false,
      ifModal: false,
      finalImage: '',
      index: null,
      portfolioData: [],
      sortData: []
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentDidMount = () => {
    this.setState({ portfolioData: ResumeData.portfolio, sortData: ResumeData.portfolio })
  }
  moreImages = (index) => {
    this.setState({ ifModal: !this.state.ifModal, index: index })
  }

  handleClose = () => {
    this.setState({ ifModal: !this.state.ifModal })
  }
  sortFrontEnd = (sort) => {
    const sortArray = [...this.state.sortData];
    const finalArray = sortArray.filter(project => {
      return project.role === sort
    })
    this.setState({ portfolioData: finalArray })
  }

  sortFullStak = (sort) => {
    const sortArray = [...this.state.sortData];
    const finalArray = sortArray.filter(project => {
      return project.role === sort
    })
    this.setState({ portfolioData: finalArray })
  }
  sortAll = () => {
    this.componentDidMount();
  }
  checkSort = (sort) => {

    if (sort === 'FRONT-END') {
      this.sortFrontEnd(sort);
    }
    if (sort === 'FULL-STACK') {
      this.sortFullStak(sort);
    }
    if (sort === 'ALL') {
      this.sortAll(sort);
    }
  }
  sortProjects = (sort) => {
    this.checkSort(sort);
  }
  render() {

    const image1 =
      "";

    const {
      resumeData
    } = this.props;

    const parallaxData = [
      {
        start:'self',
        end: 500,
        properties: [
          {
            easing: [0.25, 0.1, 0.53, 3],
            startValue: 0,
            endValue: 360,
            property: 'rotate',
          },
        ],
      },
    ];
    const phoneData = [
      {
        start: 'self',
        startOffset: 100,
        duration: 400,
        easing: [0.25, 0.1, 0.6, 0.1],
        properties: [
          {
            startValue: 90,
            endValue: 0,
            property: 'rotate',
          },
          {
            startValue: 0,
            endValue: 1,
            property: 'scale',
          },
        ],
      },
    ];

    return (

      <div>
        <Navbar className="Navbar" color="light" light expand="md">


          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <div className="nabarBtns">
                <div className="ul-navbar" >
                  <a>Home</a>
                </div>

                <div className="ul-navbar">
                  <a onClick={() => { scrollToContent(this.MyStory, { offset: 0, align: 'top', duration: 1000 }) }}>About me</a>

                </div>

                <div className="ul-navbar">
                  <a className="ul-navbar" onClick={() => { scrollToContent2(this.MyStoryProjects, { offset: 0, align: 'top', duration: 1000 }) }}>My Projects</a>

                </div>
                <div className="ul-navbar">
                  <a className="ul-navbar" onClick={() => { scrollToContent3(this.MyStoryEduction, { offset: 0, align: 'top', duration: 1000 }) }}>Eduction</a>
                </div>
              </div>

            </Nav>
          </Collapse>
        </Navbar>

 
        <header>
  <div class="container">
    <div class="row">    
      <div class="twelve columns">
        <h1>EKM Parallax</h1> 
      </div>
    </div>   
  </div> 
</header>

 
<section class="about">
  <div class="container">
    <div class="row">
      <div class="twelve columns">
        <h1>EKM Parallax</h1>
      </div>
    </div> 
  </div> 
</section>



        <div ref={(MyStoryProjects) => { this.MyStoryProjects = MyStoryProjects; }}>

          <Caro MyStoryProjects={this.MyStoryProjects}
            resumePortfolio={this.state.portfolioData}
            moreImages={this.moreImages}
          />
          {
            this.state.ifModal ? <Modal
              index={this.state.index}
              close={this.handleClose}
              show={this.state.ifModal}
              finalImage={this.state.finalImage}
            /> : ''
          }
        </div>
        <div ref={(MyStoryEduction) => { this.MyStoryEduction = MyStoryEduction; }} >
          <Plx
            className='MyAwesomeParallax'
            parallaxData={phoneData}
          >
            <h3 className="projectTitle">Eductio<span>n</span></h3>
          </Plx>
          <TimeLine education={resumeData.education} />
        </div>
        <Footer />
      </div>
    )
  }
}
function scrollToContent(MyStory) {
  if (MyStory != null) {
    MyStory.scrollIntoView({ behavior: 'smooth' });
  }
}
function scrollToContent2(MyStory) {
  if (MyStory != null) {
    MyStory.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToContent3(MyStory) {
  if (MyStory != null) {
    MyStory.scrollIntoView({ behavior: 'smooth' });
  }
}
export default Par