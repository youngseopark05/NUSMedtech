import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links2.css'

const NavigationLinks2 = (props) => {
  return (
    <nav className={`navigation-links2-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links2-navlink">
        {props.text}
      </Link>
      <div
        data-thq="thq-dropdown"
        className="navigation-links2-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="navigation-links2-dropdown-toggle"
        >
          <span className="navigation-links2-text">{props.text5}</span>
          <div
            data-thq="thq-dropdown-arrow"
            className="navigation-links2-dropdown-arrow"
          >
            <svg viewBox="0 0 1024 1024" className="navigation-links2-icon">
              <path d="M426 726v-428l214 214z" className=""></path>
            </svg>
          </div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="navigation-links2-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="navigation-links2-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links2-dropdown-toggle01"
            >
              <span className="navigation-links2-text01">
                Business Consultants
              </span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links2-dropdown01 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links2-dropdown-toggle02"
            >
              <span className="navigation-links2-text02">Event Organisers</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links2-dropdown02 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links2-dropdown-toggle03"
            >
              <span className="navigation-links2-text03">Video Editors</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links2-dropdown03 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links2-dropdown-toggle04"
            >
              <span className="navigation-links2-text04">Web Developers</span>
            </div>
          </li>
        </ul>
      </div>
      <span className="navigation-links2-text05"></span>
      <div
        data-thq="thq-dropdown"
        className="navigation-links2-thq-dropdown1 list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="navigation-links2-dropdown-toggle05"
        >
          <span className="navigation-links2-text06">{props.text6}</span>
          <div
            data-thq="thq-dropdown-arrow"
            className="navigation-links2-dropdown-arrow1"
          >
            <svg viewBox="0 0 1024 1024" className="navigation-links2-icon2">
              <path d="M426 726v-428l214 214z" className=""></path>
            </svg>
          </div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="navigation-links2-dropdown-list1"
        >
          <li
            data-thq="thq-dropdown"
            className="navigation-links2-dropdown04 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links2-dropdown-toggle06"
            >
              <span className="navigation-links2-text07">Morphine</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links2-dropdown05 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links2-dropdown-toggle07"
            >
              <span className="navigation-links2-text08">MediPal</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links2-dropdown06 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links2-dropdown-toggle08"
            >
              <span className="navigation-links2-text09">Physion</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links2-dropdown07 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links2-dropdown-toggle09"
            >
              <span className="navigation-links2-text10">Connecto</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links2-dropdown08 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links2-dropdown-toggle10"
            >
              <span className="navigation-links2-text11">OneTouch</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links2-dropdown09 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links2-dropdown-toggle11"
            >
              <span className="navigation-links2-text12">HeartSync</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links2-dropdown10 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links2-dropdown-toggle12"
            >
              <span className="navigation-links2-text13">Past Projects</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="navigation-links2-dropdown-arrow2"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="navigation-links2-icon4"
                >
                  <path d="M426 726v-428l214 214z" className=""></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="navigation-links2-dropdown-list2"
            >
              <li
                data-thq="thq-dropdown"
                className="navigation-links2-dropdown11 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navigation-links2-dropdown-toggle13"
                >
                  <span className="navigation-links2-text14">We-CARE</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="navigation-links2-dropdown12 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navigation-links2-dropdown-toggle14"
                >
                  <span className="navigation-links2-text15">Alleviate</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="navigation-links2-dropdown13 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navigation-links2-dropdown-toggle15"
                >
                  <span className="navigation-links2-text16">Casa Medico</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="navigation-links2-dropdown14 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navigation-links2-dropdown-toggle16"
                >
                  <span className="navigation-links2-text17">Trident</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <span className="navigation-links2-text18">{props.text2}</span>
      <span className="navigation-links2-text19">{props.text3}</span>
      <span className="navigation-links2-text20">{props.text4}</span>
    </nav>
  )
}

NavigationLinks2.defaultProps = {
  text5: 'Publicity Subcomm',
  text1: 'Publicity Subcomm',
  text3: 'Merchandise',
  rootClassName: '',
  text6: 'Projects',
  text: 'Home',
  text4: 'Join Us',
  text2: 'Events',
  text21: 'Events',
}

NavigationLinks2.propTypes = {
  text5: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text6: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text21: PropTypes.string,
}

export default NavigationLinks2
