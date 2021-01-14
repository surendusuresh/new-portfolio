import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import "firebase/storage";
import { firebase } from "../firebase/firebase";

const Certificates = () => {
  const [img1, setImg1] = useState();

  useEffect(() => {
    const storage = firebase.storage();
    storage
      .ref("/images/parallax/1.webp")
      .getDownloadURL()
      .then((url) => setImg1(url));
  }, []);

  return (
    <Parallax bgImage={img1} strength={500}>
      <div id="certificates" className="content anchor">
        <div className="content__parallax content__box">
          <h2 className="content__header">Certificates</h2>
          <dl className="content__content">
            <dt>B. Tech in Computer Science and Engineering</dt>
            <dd>From Cochin University of Science and Technology, India </dd>
            <dt>AWS Certified Solution Architect - Associate</dt>
            <dd>
              Certificate issued by Amazon Web Services.{" "}
              <a
                href="https://www.youracclaim.com/badges/86c68dcc-13c2-482f-8326-266788f4008a"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </dd>
            <dt>AWS Certified Developer - Associate</dt>
            <dd>
              Certificate issued by Amazon Web Services.{" "}
              <a
                href="https://www.youracclaim.com/badges/12b90bed-374d-407b-9371-2c3f73660f33"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </dd>
            <dt>UiPath RPA Developer - Advanced</dt>
            <dd>
              Certificate issued by UiPath.{" "}
              <a
                href="https://certificate.uipath.com/validation/diploma/code=328078564820562586"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </Parallax>
  );
};

export default Certificates;
