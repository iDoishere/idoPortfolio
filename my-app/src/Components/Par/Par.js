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
import { Wave } from 'react-animated-text';
 
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
      "https://unsplash.it/1080/720/?image=376";

    const {
      resumeData
    } = this.props;

    const parallaxData = [
      {
        start: 'self',
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
                  <a   onClick={() => { scrollToContent2(this.MyStoryProjects, { offset: 0, align: 'top', duration: 1000 }) }}>My Projects</a>
                </div>
                <div className="ul-navbar">
                  <a   onClick={() => { scrollToContent3(this.MyStoryEduction, { offset: 0, align: 'top', duration: 1000 }) }}>Eduction</a>
                </div>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
        <div>
          <Parallax className="bgimg1" bgImage={image1} style={{ height: 400 }} strength={500}>
            <div className="mainInfo">
              <p className="title">I'm Ido Cohen</p>
              <p className="title2">Full Stack Developer</p>
            <div className="titlep">
            <Wave   text="HTML/CSS | Bootstrap | JavaScript | React |NodeJS | Express | MongoDB" />
            </div>  
            </div>
            <Plx
              className='MyAwesomeParallax'
              parallaxData={parallaxData}>
              <div className='social-network'>
                <div  >
                  <a href="https://www.linkedin.com/in/ido-cohen-32617816b/" rel="noopener noreferrer" target="_blank">
                    <i class="fa fa-linkedin"  ></i>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/iDoishere?tab=repositories" rel="noopener noreferrer" target="_blank">
                    <i class="fa fa-git-square"  ></i>
                  </a>
                </div>
              </div>
            </Plx>
          </Parallax >
          <section >
            <Parallax bgImage={image1} style={{ height: 600 }} strength={500}>
              <div class="about">
                <div ref={(MyStory) => { this.MyStory = MyStory; }} >
                  <About resumeData={resumeData}
                    sortProjects={this.sortProjects}
                  />
                </div>
              </div>
            </Parallax >
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