import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './pubs.css'

const Pubs = (props) => {
  return (
    <div className="pubs-container">
      <Helmet>
        <title>Pubs - NUSMedtech</title>
        <meta property="og:title" content="Pubs - NUSMedtech" />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <div className="pubs-hero">
        <h1 className="pubs-text">Publicity subcomm</h1>
        <span className="pubs-text01">
          Find out what NUS Medtech&apos;s Publicity Subcomm does to support its
          projects and the Medtech Mission!
        </span>
      </div>
      <div className="pubs-banner">
        <div className="pubs-container1">
          <h1 className="pubs-heading">Business Consultants</h1>
          <span className="pubs-text02">
            Our business consultants support Medtech projects by identifying
            gaps in the current market, forming business models for their
            enterprises, and researching public awareness of healthcare issues
            in Singapore. 
          </span>
          <Link
            to="/biz-con-page"
            className="pubs-button button thq-button-filled"
          >
            <span className="pubs-action1 thq-body-small">Learn More</span>
          </Link>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=800"
          className="pubs-image"
        />
      </div>
      <div className="pubs-banner1">
        <div className="pubs-container2">
          <h1 className="pubs-text03">
            <span className="pubs-text04">Event Planners</span>
            <br></br>
          </h1>
          <span className="pubs-text06">
            Our event planners are responsible for planning, organizing, and
            coordinating events such as workshops, seminars, conferences, and
            networking sessions.
          </span>
          <Link
            to="/eve-plan-page"
            className="pubs-button1 button thq-button-filled"
          >
            <span className="pubs-action11 thq-body-small">Learn More</span>
          </Link>
        </div>
      </div>
      <div className="pubs-banner2">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=700"
          className="pubs-image1"
        />
        <div className="pubs-container3">
          <h1 className="pubs-text07">
            <span className="pubs-text08">Video Editors</span>
            <br></br>
          </h1>
          <span className="pubs-text10">
            Our video editors collaborate to plan video projects that promote
            Medtech&apos;s current projects, as well as Medtech community events
            at NUS.
          </span>
          <Link
            to="/vid-ed-page"
            className="pubs-button2 button thq-button-filled"
          >
            <span className="pubs-action12 thq-body-small">Learn More</span>
          </Link>
        </div>
      </div>
      <div className="pubs-banner3">
        <div className="pubs-container4">
          <h1 className="pubs-text11">
            <span className="pubs-text12">Web Designers</span>
            <br></br>
          </h1>
          <span className="pubs-text14">
            <span className="pubs-text15">
              Our web designers help organise and realise the very content
              you&apos;re seeing on this webpage!
            </span>
            <br className="pubs-text16"></br>
            <span className="pubs-text17">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="pubs-text18">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <Link
            to="/web-dev-page"
            className="pubs-button3 button thq-button-filled"
          >
            <span className="pubs-action13 thq-body-small">Learn More</span>
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Pubs
