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
          <h2 className="content__header">Skills and Tools</h2>
          <div className="content__content">
            <img
              align="left"
              alt="Visual Studio Code"
              width="75px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
            />
            <img
              align="left"
              alt="React"
              width="75px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
            />
            <img
              align="left"
              alt="React"
              width="75px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png"
            />
            <img
              align="left"
              alt="HTML5"
              width="75px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
            />
            <img
              align="left"
              alt="CSS3"
              width="75px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
            />
            <img
              align="left"
              alt="Sass"
              width="75px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
            />
            <img
              align="left"
              alt="JavaScript"
              width="75px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
            />
            <img
              align="left"
              alt="Node.js"
              width="75px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
            />
            <img
              align="left"
              alt="MongoDB"
              width="75px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
            />
            <img
              align="left"
              alt="GitHub"
              width="75px"
              src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"
            />
            <img
              align="left"
              alt="GitHub"
              width="75px"
              src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/django/django.png"
            />
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Skills;
