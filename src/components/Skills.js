import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import "firebase/storage";
import { firebase } from "../firebase/firebase";

const Skills = () => {
  const [img2, setImg2] = useState();

  useEffect(() => {
    const storage = firebase.storage();
    storage
      .ref("/images/parallax/2.jpg")
      .getDownloadURL()
      .then((url) => setImg2(url));
  }, []);

  return (
    <Parallax bgImage={img2} strength={500}>
      <div id="skills" className="content anchor">
        <div className="content__parallax content__box">
          <h2 className="content__header">Skills and Proficiencies</h2>
          <dl className="content__content">
            <dt>Front End Designing</dt>
            <dd>SEO friendly and Responsive Web Design using ReactJS </dd>
            <dt>Back End Designing</dt>
            <dd>Design backend using NodeJS, Express, MongoDB/Firebase etc.</dd>
            <dt>Amazon Web Service</dt>
            <dd>Cloud services design and architecture using AWS</dd>
            <dt>UiPath RPA Development</dt>
            <dd>Automate business processes using UiPath RPA</dd>
          </dl>
        </div>
      </div>
    </Parallax>
  );
};

export default Skills;
