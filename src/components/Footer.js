import React from "react";
import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
  const aboutMe = () => {
    return (
      <div className="footer__intro flex">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/new-portfolio-3502a.appspot.com/o/images%2FmyImage.jpg?alt=media&token=3931dd8b-52d8-44cc-8faf-fbee2ec72da1"
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
            <a
              href="https://www.linkedin.com/in/surendusuresh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__img"
                src="https://firebasestorage.googleapis.com/v0/b/new-portfolio-3502a.appspot.com/o/images%2Flinkedin.png?alt=media&token=93993f6c-cc3f-45bd-9dec-48512fefc164"
                alt="linkedin"
              />
              <span className="footer__white">LINKEDIN</span>
            </a>
            <h6>Connect with me via LinkedIn</h6>
            <a
              href="https://github.com/surendusuresh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__img"
                src="https://firebasestorage.googleapis.com/v0/b/new-portfolio-3502a.appspot.com/o/images%2Fgithub.png?alt=media&token=e444160d-1132-4cdb-83f7-65cbc1cbdd70"
                alt="github"
              />
              <span className="footer__white">GITHUB</span>
            </a>
            <h6>Connect with me via GitHub</h6>
            <NavHashLink to="/contact" className="footer__white">
              GET IN TOUCH
            </NavHashLink>
            <h6>Connect with me</h6>
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
          <h6>Copyright&#169; {(new Date().getFullYear())} | Surendu Suresh</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
