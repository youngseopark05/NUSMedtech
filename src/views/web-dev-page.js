import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './web-dev-page.css'

const WebDevPage = (props) => {
  return (
    <div className="web-dev-page-container">
      <Helmet>
        <title>WebDevPage - NUSMedtech</title>
        <meta property="og:title" content="WebDevPage - NUSMedtech" />
      </Helmet>
      <Header rootClassName="header-root-class-name8"></Header>
      <div className="web-dev-page-hero">
        <h1 className="web-dev-page-text">Web Designers</h1>
        <span className="web-dev-page-text01">
          Find out what NUS Medtech&apos;s Publicity Subcomm does to support its
          projects and the Medtech Mission!
        </span>
      </div>
      <div className="web-dev-page-banner">
        <div className="web-dev-page-container1">
          <h1 className="web-dev-page-text02">
            <span className="web-dev-page-text03">Web Designers</span>
            <br></br>
          </h1>
          <span className="web-dev-page-text05">
            <span className="web-dev-page-text06">
              Our web designers help organise and realise the very content you
              see here! We also accept requests from other medtech organisations
              to build their websites.
            </span>
            <br className="web-dev-page-text07"></br>
            <span className="web-dev-page-text08">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="web-dev-page-text09">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default WebDevPage
