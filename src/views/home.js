import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>NUSMedtech</title>
        <meta property="og:title" content="NUSMedtech" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-hero">
        <h1 className="home-text">NUS MEDTECH</h1>
        <span className="home-text01">
          Bringing students together from multi-disciplinary backgrounds to
          collaborate in innovating and designing healthcare and medical
          products.
        </span>
      </div>
      <div className="home-banner">
        <div className="home-container1">
          <h1 className="home-heading">Our Purpose</h1>
          <span className="home-text02">
            <span className="home-text03">
              Initiated in 2019, NUS MedTech is a student society that aims to
              give NUS students the opportunity to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text04">
              design and embrace healthcare innovations for the greater good
            </span>
            <span className="home-text05">.</span>
            <span className="home-text06">
              {' '}
              We desire to create a platform for learning and problem-solving
              beyond the curriculum, and exploring the real-world applications
              of biomedical engineering.
            </span>
            <span className="home-text07">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text08">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=800"
          className="home-image"
        />
      </div>
      <div className="home-banner1">
        <div className="home-container2">
          <h1 className="home-text09">How Can You Be Involved?</h1>
          <span className="home-text10">
            <span className="home-text11">
              Throughout the academic year, members and the general student body
              may look forward to: 
            </span>
            <span className="home-text12">
              project recruitment, talks, workshops, ad-hoc events, and
              competitions
            </span>
            <span className="home-text13">.</span>
            <span className="home-text14">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="home-text15"></br>
            <span className="home-text16">
              NUS MedTech is also in the process of producing informative and
              insightful videos 
            </span>
            <span className="home-text17">
              relevant to the MedTech industry for educational purposes.
            </span>
            <br className="home-text18"></br>
            <span className="home-text19">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text20">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <div className="home-banner2">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=700"
          className="home-image1"
        />
        <div className="home-container3">
          <h1 className="home-text21">
            <span>
              Why Connect
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>With Us?</span>
          </h1>
          <span className="home-text25">
            <span className="home-text26">
              By being involved, members will be able to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text27">
              connect and communicate with speakers and healthcare professionals
            </span>
            <span className="home-text28">
              . They will also be able to actively compete in competitions that
              will be an asset to their future career and in gaining internship
              opportunities.
            </span>
            <span className="home-text29">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text30">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
