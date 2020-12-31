import React, { useState, useEffect } from "react";
import Gallery from "react-grid-gallery";
import "firebase/storage";
import { firebase } from "../firebase/firebase";
import Loader from "../components/Loader";

const Portfolio = () => {
  const storage = firebase.storage();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    storage
      .ref("/config/galleryimages.json")
      .getDownloadURL()
      .then((url) => {
        setLoading(true);
        fetch(url, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            setImages(data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      });
  }, [storage]);

  return (
    <div className="content anchor content__portfolio" id="portfolio">
      <h2 className="content__header">Portfolio</h2>
      {loading ? <Loader /> : <Gallery images={images} />}
    </div>
  );
};

export default Portfolio;
