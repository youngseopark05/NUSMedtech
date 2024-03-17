import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <span className="navigation-links1-text">{props.text}</span>
      <span className="navigation-links1-text1">{props.text1}</span>
      <div
        data-thq="thq-dropdown"
        className="navigation-links1-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="navigation-links1-dropdown-toggle"
        >
          <span className="navigation-links1-text2">Projects</span>
          <div
            data-thq="thq-dropdown-arrow"
            className="navigation-links1-dropdown-arrow"
          >
            <svg viewBox="0 0 1024 1024" className="navigation-links1-icon">
              <path d="M426 726v-428l214 214z" className=""></path>
            </svg>
          </div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="navigation-links1-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="navigation-links1-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links1-dropdown-toggle1"
            >
              <span className="navigation-links1-text3">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links1-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links1-dropdown-toggle2"
            >
              <span className="navigation-links1-text4">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links1-dropdown3 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links1-dropdown-toggle3"
            >
              <span className="navigation-links1-text5">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
      <span className="navigation-links1-text6">{props.text3}</span>
      <span className="navigation-links1-text7">{props.text4}</span>
      <span className="navigation-links1-text8">{props.text5}</span>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text: 'Home',
  text3: 'Events',
  text2: '',
  rootClassName: '',
  text4: 'Merchandise',
  text5: 'Join Us',
  text1: 'Publicity Subcomm',
}

NavigationLinks1.propTypes = {
  text: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks1
