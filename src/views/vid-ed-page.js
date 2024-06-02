import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './vid-ed-page.css'

const VidEdPage = (props) => {
  return (
    <div className="vid-ed-page-container">
      <Helmet>
        <title>VidEdPage - NUSMedtech</title>
        <meta property="og:title" content="VidEdPage - NUSMedtech" />
      </Helmet>
      <Header rootClassName="header-root-class-name7"></Header>
      <div className="vid-ed-page-hero">
        <h1 className="vid-ed-page-text">Video Editors</h1>
        <span className="vid-ed-page-text01">
          Find out what NUS Medtech&apos;s Publicity Subcomm does to support its
          projects and the Medtech Mission!
        </span>
      </div>
      <div className="vid-ed-page-banner">
        <div className="vid-ed-page-container1">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=1400"
            className="vid-ed-page-image"
          />
        </div>
        <div className="vid-ed-page-container2">
          <h1 className="vid-ed-page-text02">
            <span className="vid-ed-page-text03">Video Editors</span>
            <br></br>
          </h1>
          <span className="vid-ed-page-text05">
            <span>
              Our video editors collaborate with marketing and project teams to
              plan video projects that visually communicate the group&apos;s
              mission and achievements.
            </span>
            <br className="vid-ed-page-text07"></br>
            <br className="vid-ed-page-text08"></br>
            <span>
              Video editors are required to organize and maintain a library of
              video assets, as well as stay updated with the latest trends and
              techniques in video editing.
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="vid-ed-page-steps">
        <h1 className="vid-ed-page-text11">Our Process</h1>
        <div className="vid-ed-page-container3">
          <div className="vid-ed-page-container4">
            <div className="vid-ed-page-step">
              <h1 className="vid-ed-page-text12">
                <span>1</span>
              </h1>
              <h1 className="vid-ed-page-text14">Recording</h1>
              <span className="vid-ed-page-text15">
                <span>
                  Capture video footage of events, workshops, and
                  demonstrations.
                </span>
                <br></br>
              </span>
            </div>
            <div className="vid-ed-page-step1">
              <h1 className="vid-ed-page-text18">
                <span>2</span>
              </h1>
              <h1 className="vid-ed-page-text20">Editing</h1>
              <span className="vid-ed-page-text21">
                <span>
                  Edit raw footage using video editing software. Add
                  transitions, visual effects, graphics, and text overlays.
                  Create animations and motion graphics as needed.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="vid-ed-page-container5">
            <div className="vid-ed-page-step2">
              <h1 className="vid-ed-page-text24">
                <span>3</span>
              </h1>
              <h1 className="vid-ed-page-text26">Mixing</h1>
              <span className="vid-ed-page-text27">
                <span>
                  Edit and mix audio tracks for clear and balanced sound.
                </span>
                <br></br>
              </span>
            </div>
            <div className="vid-ed-page-step3">
              <h1 className="vid-ed-page-text30">
                <span>4</span>
              </h1>
              <h1 className="vid-ed-page-text32">Repeat!</h1>
              <span className="vid-ed-page-text33">
                <span>
                  Incorporate feedback and revisions throughout the editing
                  process.
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default VidEdPage
