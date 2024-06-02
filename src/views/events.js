import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './events.css'

const Events = (props) => {
  return (
    <div className="events-container">
      <Helmet>
        <title>Events - NUSMedtech</title>
        <meta property="og:title" content="Events - NUSMedtech" />
      </Helmet>
      <Header rootClassName="header-root-class-name11"></Header>
      <div className="events-hero">
        <h1 className="events-text">EVENTS</h1>
        <span className="events-text01">
          Find out what events NUS Medtech holds all year round!
        </span>
      </div>
      <div className="events-banner">
        <div className="events-container1">
          <h1 className="events-heading">
            <span>Student Life Fair (SLF)</span>
            <br></br>
          </h1>
          <span className="events-text04">
            Student Life Fair provides an opportunity for NUS MedTech to outline
            its vision for the future and the role that new members can play in
            achieving it. Whether students are interested in hands-on
            engineering projects, data analytics in healthcare, or clinical
            research, there&apos;s a place for them in the group. The fair
            serves as a platform for the group to communicate its inclusive
            ethos and to attract individuals with a wide range of skills and
            interests.
          </span>
        </div>
        <div className="events-container2">
          <img
            src="/screenshot%202024-06-02%20205028-800w.png"
            alt="image"
            className="events-image"
          />
        </div>
      </div>
      <div className="events-banner1">
        <div className="events-container3">
          <div className="events-container4">
            <img
              src="/screenshot%202024-06-02%20205431-1500w.png"
              alt="image"
              className="events-image1"
            />
          </div>
          <h1 className="events-text05">Student-Industry Networking Dinner</h1>
          <span className="events-text06">
            The MedTech conference aims to connect students to industry leaders,
            giving students an opportunity to understand what is it like to work
            in the biomedical industry.
          </span>
        </div>
      </div>
      <div className="events-banner2">
        <div className="events-container5">
          <img
            src="/screenshot%202024-06-02%20205705-700w.png"
            alt="image"
            className="events-image2"
          />
        </div>
        <div className="events-container6">
          <h1 className="events-text07">CDE Day</h1>
          <span className="events-text08">
            CDE day is an annual carnival hosted by the College of Design and
            Engineering at NUS. We utilize this event to set up mini-games, sell
            merchandise and promote NUS MedTech.
          </span>
        </div>
      </div>
      <div className="events-banner3">
        <div className="events-container7">
          <div className="events-container8">
            <img
              src="/screenshot%202024-06-02%20205808-1500w.png"
              alt="image"
              className="events-image3"
            />
          </div>
          <h1 className="events-text09">BES Scientific Meeting</h1>
          <span className="events-text10">
            BES organises a scientific meeting annually, allowing different
            institutions such as universities and polytechnnics to co-host the
            event. The scientific meeting consists of talks and competitions to
            inspire students in ideation, engineering and research projects.
          </span>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name8"></Footer>
    </div>
  )
}

export default Events
