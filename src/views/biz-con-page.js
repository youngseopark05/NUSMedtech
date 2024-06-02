import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './biz-con-page.css'

const BizConPage = (props) => {
  return (
    <div className="biz-con-page-container">
      <Helmet>
        <title>BizConPage - NUSMedtech</title>
        <meta property="og:title" content="BizConPage - NUSMedtech" />
      </Helmet>
      <Header rootClassName="header-root-class-name5"></Header>
      <div className="biz-con-page-hero">
        <h1 className="biz-con-page-text">Business Consultants</h1>
        <span className="biz-con-page-text01">
          Find out what NUS Medtech&apos;s Publicity Subcomm does to support its
          projects and the Medtech Mission!
        </span>
      </div>
      <div className="biz-con-page-banner">
        <div className="biz-con-page-container1">
          <h1 className="biz-con-page-heading">Business Consultants</h1>
          <span className="biz-con-page-text02">
            <span className="biz-con-page-text03">
              Our business consultants help Medtech project teams conduct market
              research on current products aimed at a certain healthcare issue,
              and identify gaps in the Singapore market for Medtech products.
            </span>
            <br></br>
            <br></br>
            <span>
              They also conduct research on the significance, frequency, as well
              as perceptions on healthcare issues and products aimed at
              addressing them amongst the general public and health
              professionals. 
            </span>
            <br></br>
            <br></br>
            <span>
              Finally, they also help Medtech project teams construct business
              models and pitches for entrepreneurial success.
            </span>
            <br></br>
          </span>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=800"
          className="biz-con-page-image"
        />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BizConPage
