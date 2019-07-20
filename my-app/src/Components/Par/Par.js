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
      "https://unsplash.it/1080/720/?image=376";
    const image2 =
      "data:image/jpeg;base64,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"
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
                  <a className="ul-navbar" onClick={() => { scrollToContent2(this.MyStoryProjects, { offset: 0, align: 'top', duration: 1000 }) }}>My Projects</a>

                </div>
                <div className="ul-navbar">
                  <a className="ul-navbar" onClick={() => { scrollToContent3(this.MyStoryEduction, { offset: 0, align: 'top', duration: 1000 }) }}>Eduction</a>
                </div>
              </div>

            </Nav>
          </Collapse>
        </Navbar>





        <div>

          <Parallax className="bgimg1" bgImage={image1} style={{ height: 500 }} strength={500}>
            <div className="mainInfo">
              <h1 className="title">I'm Ido Cohen</h1>
              <h5 className="title2">Full Stack Developer</h5>
              <p className="titlep">HTML/CSS | Bootstrap | JavaScript | React |NodeJS | Express | MongoDB</p>
            </div>
            <Plx
              className='MyAwesomeParallax'
              parallaxData={parallaxData}
            >
              <div className='social-network'>
                <div className="try1">
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
            <Parallax bgImage={image1} style={{ height: 800 }} strength={500}>

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

{/* 
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
        </div> */}
        {/* <Footer /> */}
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