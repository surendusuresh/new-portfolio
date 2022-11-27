import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "firebase/compat/storage";
import { firebase } from "../firebase/firebase";

const CarouselPage = () => {
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();

  useEffect(() => {
    const storage = firebase.storage();
    storage
      .ref()
      .child("images")
      .child("carousel")
      .child("1.webp")
      .getDownloadURL()
      .then((url) => setImg1(url))
      .catch((err) => console.log(err));
    storage
      .ref("/images/carousel/2.webp")
      .getDownloadURL()
      .then((url) => setImg2(url));
    storage
      .ref("/images/carousel/3.webp")
      .getDownloadURL()
      .then((url) => setImg3(url));
  }, []);

  return (
    <div className="content__carousel">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
        interval={4000}
      >
        <div>
          <img src={img1} alt="img1" className="content__img" />
        </div>
        <div>
          <img src={img2} alt="img2" className="content__img" />
        </div>
        <div>
          <img src={img3} alt="img3" className="content__img" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
