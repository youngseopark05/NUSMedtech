import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './projects.css'

const Projects = (props) => {
  return (
    <div className="projects-container">
      <Helmet>
        <title>Projects - NUSMedtech</title>
        <meta property="og:title" content="Projects - NUSMedtech" />
      </Helmet>
      <Header rootClassName="header-root-class-name10"></Header>
      <div className="projects-hero">
        <h1 className="projects-text">PROJECTS</h1>
        <span className="projects-text01">
          Find out what inspiring and innovative projects are going on at NUS
          Medtech!
        </span>
      </div>
      <div className="projects-blog">
        <div className="projects-container01">
          <div className="projects-blog-post-card">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&amp;ixlib=rb-1.2.1&amp;h=1200"
              className="projects-image"
            />
            <div className="projects-container02">
              <h1 className="projects-text02">
                <span className="projects-text03">Project Connecto</span>
                <br></br>
              </h1>
              <div className="projects-container03">
                <span className="projects-text05">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
                  Integer in dignissim tortor. Lorem ipsum dolor sit amet,
                  consectetur adipiscing ...
                </span>
                <button className="projects-button button thq-button-filled">
                  <span className="projects-action1 thq-body-small">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-container04">
          <div className="projects-blog-post-card1">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHdvcmt8ZW58MHx8fHwxNjI2NDUwNzky&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="projects-image1"
            />
            <div className="projects-container05">
              <h1 className="projects-text06">Project MediPal</h1>
              <div className="projects-container06">
                <span className="projects-text07">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
                  Integer in dignissim tortor. Lorem ipsum dolor sit amet,
                  consectetur adipiscing ...
                </span>
                <button className="projects-button1 button thq-button-filled">
                  <span className="projects-action11 thq-body-small">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-container07">
          <div className="projects-blog-post-card2">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHdvcmt8ZW58MHx8fHwxNjI2NDUwNzky&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="projects-image2"
            />
            <div className="projects-container08">
              <h1 className="projects-text08">Project Morphine</h1>
              <div className="projects-container09">
                <span className="projects-text09">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
                  Integer in dignissim tortor. Lorem ipsum dolor sit amet,
                  consectetur adipiscing ...
                </span>
                <button className="projects-button2 button thq-button-filled">
                  <span className="projects-action12 thq-body-small">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-container10">
          <div className="projects-blog-post-card3">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHdvcmt8ZW58MHx8fHwxNjI2NDUwNzky&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="projects-image3"
            />
            <div className="projects-container11">
              <h1 className="projects-text10">Project OneTouch</h1>
              <div className="projects-container12">
                <span className="projects-text11">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
                  Integer in dignissim tortor. Lorem ipsum dolor sit amet,
                  consectetur adipiscing ...
                </span>
                <button className="projects-button3 button thq-button-filled">
                  <span className="projects-action13 thq-body-small">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-blog-post-card4">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHx3b3JrJTIwb2ZmaWNlfGVufDB8fHx8MTYyNjQ1MDgzMQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="projects-image4"
          />
          <div className="projects-container13">
            <h1 className="projects-text12">
              <span className="projects-text13">Project Physion</span>
              <br></br>
            </h1>
            <div className="projects-container14">
              <span className="projects-text15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing ...
              </span>
              <button className="projects-button4 button thq-button-filled">
                <span className="projects-action14 thq-body-small">
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name7"></Footer>
    </div>
  )
}

export default Projects
