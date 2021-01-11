import React from "react";
import { NavHashLink } from "react-router-hash-link";

const About = () => (
  <div id="about" className="content anchor">
    <h2 className="content__header">About me</h2>
    <p className="content__content">
      Hi, I am Surendu, an IT professional with 12 years of experience. I am a
      graduate in computer science and engineering. I am a self taught web
      developer experienced in ReactJS, NodeJS, MongoDB, Express and cloud
      solutions in Amazon Web Service. I am also a certified UiPath RPA
      Developer.
    </p>
    <br></br>
    <p className="content__content">
      I am interested in learning new technologies and advancing myself into new
      areas of software architecture. I have been working as server admin for a
      period of my career and later I did self learning of web development
      technolgies, cloud, RPA etc. I always look forward to challenging projects
      to work on and enhance my skills.
    </p>
    <br></br>
    <p className="content__content">
      I am a tech enthusiast who loves to interact with people to understand
      their perspective on different aspects of professional growth.
    </p>
    <p className="content__content">
      <NavHashLink to="/#skills" smooth className="content__link">
        Skill Set
      </NavHashLink>
    </p>
  </div>
);

export default About;
