import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./nav-menu.css";

const NavMenu = (props) => {
  return (
    <nav className={`nav-menu-nav ${props.rootClassName} `}>
      <Link to="/" className="nav-menu-navlink">
        {props.text}
      </Link>
      <div data-thq="thq-dropdown" className="nav-menu-thq-dropdown list-item">
        <Link to="/pubs" className="">
          <div
            data-thq="thq-dropdown-toggle"
            className="nav-menu-dropdown-toggle"
          >
            <span className="nav-menu-text">{props.text5}</span>
            <div
              data-thq="thq-dropdown-arrow"
              className="nav-menu-dropdown-arrow"
            >
              <svg viewBox="0 0 1024 1024" className="nav-menu-icon">
                <path d="M426 726v-428l214 214z" className=""></path>
              </svg>
            </div>
          </div>
        </Link>
        <ul data-thq="thq-dropdown-list" className="nav-menu-dropdown-list">
          <li data-thq="thq-dropdown" className="nav-menu-dropdown list-item">
            <Link to="/biz-con-page" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="nav-menu-dropdown-toggle01"
              >
                <span className="nav-menu-text01">Business Consultants</span>
              </div>
            </Link>
          </li>
          <li data-thq="thq-dropdown" className="nav-menu-dropdown01 list-item">
            <Link to="/eve-plan-page" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="nav-menu-dropdown-toggle02"
              >
                <span className="nav-menu-text02">
                  <span className="nav-menu-text03">Event Planners</span>
                  <br className=""></br>
                </span>
              </div>
            </Link>
          </li>
          <li data-thq="thq-dropdown" className="nav-menu-dropdown02 list-item">
            <Link to="/vid-ed-page" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="nav-menu-dropdown-toggle03"
              >
                <span className="nav-menu-text05">Video Editors</span>
              </div>
            </Link>
          </li>
          <li data-thq="thq-dropdown" className="nav-menu-dropdown03 list-item">
            <Link to="/web-dev-page" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="nav-menu-dropdown-toggle04"
              >
                <span className="nav-menu-text06">Web Developers</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <span className="nav-menu-text07"></span>
      <div data-thq="thq-dropdown" className="nav-menu-thq-dropdown1 list-item">
        <Link to="/projects" className="">
          <div
            data-thq="thq-dropdown-toggle"
            className="nav-menu-dropdown-toggle05"
          >
            <span className="nav-menu-text08">{props.text6}</span>
            <div
              data-thq="thq-dropdown-arrow"
              className="nav-menu-dropdown-arrow1"
            >
              <svg viewBox="0 0 1024 1024" className="nav-menu-icon2">
                <path d="M426 726v-428l214 214z" className=""></path>
              </svg>
            </div>
          </div>
        </Link>
        <ul data-thq="thq-dropdown-list" className="nav-menu-dropdown-list1">
          <li data-thq="thq-dropdown" className="nav-menu-dropdown04 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="nav-menu-dropdown-toggle06"
            >
              <span className="nav-menu-text09">
                <span className="">Connecto</span>
                <br className=""></br>
              </span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="nav-menu-dropdown05 list-item">
            <Link to="/projects/medipal">
              <div
                data-thq="thq-dropdown-toggle"
                className="nav-menu-dropdown-toggle07"
              >
                <span className="nav-menu-text12">MediPal</span>
              </div>
            </Link>
          </li>
          <li data-thq="thq-dropdown" className="nav-menu-dropdown06 list-item">
            <Link to="/projects/morphine">
              <div
                data-thq="thq-dropdown-toggle"
                className="nav-menu-dropdown-toggle08"
              >
                <span className="nav-menu-text13">Morphine</span>
              </div>
            </Link>
          </li>
          <li data-thq="thq-dropdown" className="nav-menu-dropdown07 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="nav-menu-dropdown-toggle09"
            >
              <span className="nav-menu-text14">OneTouch</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="nav-menu-dropdown08 list-item">
            <Link to="/projects/physion">
              <div
                data-thq="thq-dropdown-toggle"
                className="nav-menu-dropdown-toggle10"
              >
                <span className="nav-menu-text15">Physion</span>
              </div>
            </Link>
          </li>
          <li
            data-thq="thq-dropdown"
            className="nav-menu-dropdown09 list-item"
          ></li>
          <li data-thq="thq-dropdown" className="nav-menu-dropdown10 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="nav-menu-dropdown-toggle11"
            >
              <span className="nav-menu-text16">Past Projects</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="nav-menu-dropdown-arrow2"
              >
                <svg viewBox="0 0 1024 1024" className="nav-menu-icon4">
                  <path d="M426 726v-428l214 214z" className=""></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="nav-menu-dropdown-list2"
            >
              <li
                data-thq="thq-dropdown"
                className="nav-menu-dropdown11 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="nav-menu-dropdown-toggle12"
                >
                  <span className="nav-menu-text17">We-CARE</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="nav-menu-dropdown12 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="nav-menu-dropdown-toggle13"
                >
                  <span className="nav-menu-text18">Alleviate</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="nav-menu-dropdown13 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="nav-menu-dropdown-toggle14"
                >
                  <span className="nav-menu-text19">Casa Medico</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="nav-menu-dropdown14 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="nav-menu-dropdown-toggle15"
                >
                  <span className="nav-menu-text20">Trident</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <Link to="/events" className="nav-menu-navlink7">
        {props.text2}
      </Link>
      <span className="nav-menu-text21">{props.text3}</span>
      <span className="nav-menu-text22">{props.text4}</span>
    </nav>
  );
};

NavMenu.defaultProps = {
  text5: "Publicity Subcomm",
  text1: "Publicity Subcomm",
  text3: "Merchandise",
  rootClassName: "",
  text7: "Event Organisers",
  text6: "Projects",
  text: "Home",
  text4: "Join Us",
  text2: "Events",
  text21: "Events",
};

NavMenu.propTypes = {
  text5: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text7: PropTypes.string,
  text6: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text21: PropTypes.string,
};

export default NavMenu;
