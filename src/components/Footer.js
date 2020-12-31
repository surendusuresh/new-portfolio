import React from "react";
import { NavHashLink } from "react-router-hash-link";


const Footer = () => {
  const aboutMe = () => {
    return (
      <div className="footer__intro flex">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/new-portfolio-3502a.appspot.com/o/myImage.jpg?alt=media&token=eab8ff79-4b51-46f4-8ca0-80ef981b1225"
            alt="Surendu Suresh"
            className=""
          />
        </div>
        <div>
          <h4 className="footer__content">
            I am a Full Stack Developer with 12 years of industry experience. I
            have experience in AWS, UiPath RPA Development and as Siebel
            Administrator. I can build responsive web application as per the
            business requirements. Please get in touch with me for any
            enquiries.
          </h4>
        </div>
      </div>
    );
  };

  return (
    <div id="contact" className="footer">
      <div className="footer__box">
        <hr className="footer__line" />
        <div className="footer__flex">
          <div>{aboutMe()}</div>
          <div className="footer__items">
            <a href='https://www.linkedin.com/in/surendusuresh/' target="_blank" rel="noopener noreferrer">
              <img
                className="footer__img"
                src="https://firebasestorage.googleapis.com/v0/b/new-portfolio-3502a.appspot.com/o/linkedin.png?alt=media&token=53933e6d-a388-4dd9-9e68-86e9906b461c"
                alt="linkedin"
              />
              <span className="footer__white"> LINKEDIN</span>
            </a>
            <h6>Connect with me via LinkedIn</h6>
          </div>
          <div className="footer__items">
            <NavHashLink to="#about" className="footer__white">
              ABOUT
            </NavHashLink>
            <h6>Learn more about Surendu Suresh</h6>
            <NavHashLink to="#portfolio" className="footer__white">
              PORTFOLIO
            </NavHashLink>
            <h6>Learn about past works</h6>
            
          </div>
        </div>
        <div className="footer__copyright">
          <h6>Copyright&#169; Surendu Suresh</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
