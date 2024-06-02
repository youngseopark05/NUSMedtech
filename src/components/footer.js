import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container">
        <span className="footer-text">
          <span className="">
            Proudly
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className=""></br>
          <span className="">
            Partnered
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className=""></br>
          <span className="">With:</span>
        </span>
        <div className="footer-container1">
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="footer-image"
          />
          <img
            alt={props.imageAlt4}
            src={props.imageSrc4}
            className="footer-image1"
          />
          <img
            alt={props.imageAlt8}
            src={props.imageSrc8}
            className="footer-image2"
          />
          <img
            alt={props.imageAlt7}
            src={props.imageSrc7}
            className="footer-image3"
          />
          <img
            alt={props.imageAlt6}
            src={props.imageSrc6}
            className="footer-image4"
          />
          <img
            alt={props.imageAlt5}
            src={props.imageSrc5}
            className="footer-image5"
          />
        </div>
      </div>
      <div className="footer-icon-group">
        <a
          href="mailto:nusmedtech.official@gmail.com?subject="
          className="footer-link"
        >
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="footer-image6"
          />
        </a>
        <a
          href="https://instagram.com/nus.medtech"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link1"
        >
          <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon">
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              className=""
            ></path>
          </svg>
        </a>
        <a
          href="https://t.me/NUSMedTech"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link2"
        >
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="footer-image7"
          />
        </a>
        <a
          href="https://linktr.ee/nusmedtech"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link3"
        >
          <img
            alt={props.imageAlt2}
            src={props.imageSrc2}
            className="footer-image8"
          />
        </a>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  imageSrc3: '/cobrand-cde_h_reversed-removebg-preview-200h.png',
  linkImage1: 'https://linktr.ee/nusmedtech',
  imageAlt5: 'image',
  imageAlt6: 'image',
  imageAlt8: 'image',
  linkImage: 'https://t.me/NUSMedTech',
  imageSrc6: '/ieee-embs-tag-tm-lg-ko-logo2x-200h.png',
  imageSrc1: '/telegram-logo-transparent-free-png-200h.webp',
  imageAlt4: 'image',
  imageSrc8: '/image%20(1)-200h.png',
  imageSrc5: '/beslogo-200h.png',
  imageSrc2: '/linktree-logo-6fc3adb679-seeklogo.com%20(1)-200w.png',
  imageAlt2: 'image',
  linkIcon: 'https://www.instagram.com/nus.medtech/',
  imageAlt7: 'image',
  imageAlt1: 'image',
  imageSrc: '/email-icon-white-png-38-200h.png',
  imageSrc4: '/326799656_1213918089552886_6205557170455699145_white-200h.png',
  rootClassName: '',
  imageSrc7: '/image-200h.png',
  imageAlt: 'image',
  imageAlt3: 'image',
}

Footer.propTypes = {
  imageSrc3: PropTypes.string,
  linkImage1: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageAlt6: PropTypes.string,
  imageAlt8: PropTypes.string,
  linkImage: PropTypes.string,
  imageSrc6: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageSrc8: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  linkIcon: PropTypes.string,
  imageAlt7: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc4: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc7: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt3: PropTypes.string,
}

export default Footer
