import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks2 from '../components/navigation-links2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>NUSMedtech</title>
        <meta property="og:title" content="NUSMedtech" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <img
          alt="image"
          src="/photo_2024-03-02_17-10-29-200h.jpg"
          className="home-image"
        />
        <div className="home-nav">
          <NavigationLinks2 rootClassName="rootClassName17"></NavigationLinks2>
        </div>
        <div data-role="BurgerMenu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <div className="home-nav1">
            <div className="home-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="home-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks2 rootClassName="rootClassName18"></NavigationLinks2>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <h1 className="home-text">NUS MEDTECH</h1>
        <span className="home-text01">
          Bringing students together from multi-disciplinary backgrounds to
          collaborate in innovating and designing healthcare and medical
          products.
        </span>
      </div>
      <div className="home-banner">
        <div className="home-container2">
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
          className="home-image2"
        />
      </div>
      <div className="home-banner1">
        <div className="home-container3">
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
          className="home-image3"
        />
        <div className="home-container4">
          <h1 className="home-text21">Why Connect With Us?</h1>
          <span className="home-text22">
            <span className="home-text23">
              By being involved, members will be able to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text24">
              connect and communicate with speakers and healthcare professionals
            </span>
            <span className="home-text25">
              . They will also be able to actively compete in competitions that
              will be an asset to their future career and in gaining internship
              opportunities.
            </span>
            <span className="home-text26">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text27">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-container5">
          <span className="home-text28">
            <span>
              Proudly
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Partnered
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>With:</span>
          </span>
          <div className="home-container6">
            <img
              alt="image"
              src="/cobrand-cde_h_reversed-removebg-preview-200h.png"
              className="home-image4"
            />
            <img
              alt="image"
              src="/326799656_1213918089552886_6205557170455699145_white-200h.png"
              className="home-image5"
            />
            <img alt="image" src="/beslogo-200h.png" className="home-image6" />
          </div>
        </div>
        <div className="home-icon-group1">
          <a
            href="mailto:nusmedtech.official@gmail.com?subject="
            className="home-link"
          >
            <img
              alt="image"
              src="/email-icon-white-png-38-200h.png"
              className="home-image7"
            />
          </a>
          <a
            href="https://www.instagram.com/nus.medtech/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon10">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
          <a
            href="https://t.me/NUSMedTech"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link2"
          >
            <img
              alt="image"
              src="/telegram-logo-transparent-free-png-200h.webp"
              className="home-image8"
            />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
