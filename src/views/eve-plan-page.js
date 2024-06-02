import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './eve-plan-page.css'

const EvePlanPage = (props) => {
  return (
    <div className="eve-plan-page-container">
      <Helmet>
        <title>EvePlanPage - NUSMedtech</title>
        <meta property="og:title" content="EvePlanPage - NUSMedtech" />
      </Helmet>
      <Header rootClassName="header-root-class-name6"></Header>
      <div className="eve-plan-page-hero">
        <h1 className="eve-plan-page-text">Event Planners</h1>
        <span className="eve-plan-page-text1">
          Find out what NUS Medtech&apos;s Publicity Subcomm does to support its
          projects and the Medtech Mission!
        </span>
      </div>
      <div className="eve-plan-page-banner">
        <div className="eve-plan-page-container1">
          <h1 className="eve-plan-page-text2">
            <span className="eve-plan-page-text3">Event Planners</span>
            <br></br>
          </h1>
          <span className="eve-plan-page-text5">
            Our event planners are responsible for planning, organizing, and
            coordinating events such as workshops, seminars, conferences, and
            networking sessions. This involves conceptualizing event themes,
            setting objectives, developing event timelines, and liaising with
            relevant stakeholders to ensure all logistical requirements are met.
          </span>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default EvePlanPage
