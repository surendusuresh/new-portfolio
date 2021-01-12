import React, { useState, useEffect } from "react";
import Gallery from "react-grid-gallery";
import "firebase/storage";
import { firebase } from "../firebase/firebase";
import Loader from "./Loader";
import CardItem from "./CardItem";

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
      <div className="portfolio-cards">
        <CardItem
          imgURL="https://firebasestorage.googleapis.com/v0/b/new-portfolio-3502a.appspot.com/o/images%2Fgallery%2Farchitect-site.png?alt=media&token=a8f0da59-1854-4af5-8ca8-233a197fd48d"
          title="Architect Firm Portfolio Website"
          desc="Website created using React for an architecture firm"
          siteURL="https://architect-site.herokuapp.com/"
        />
        <CardItem
          imgURL="https://firebasestorage.googleapis.com/v0/b/new-portfolio-3502a.appspot.com/o/images%2Fgallery%2Fshopper.PNG?alt=media&token=d91edb7e-264e-4293-a7cf-602204988d4e"
          title="eCommerce Web Application"
          desc="Created using MERN stack which has payment gateway integration"
          siteURL="https://ssuresh-ecommerce-front.herokuapp.com/"
        />        
        <CardItem
          imgURL="https://firebasestorage.googleapis.com/v0/b/new-portfolio-3502a.appspot.com/o/images%2Fgallery%2Fexpensemanager_login.PNG?alt=media&token=586880a9-08ed-462b-94cf-3993bd463b58"
          title="Expense Manager App"
          desc="Created using React and Firebase to track the expenses incurred"
          siteURL="https://react-expensify-ssuresh.herokuapp.com/"
        />
      </div>
    </div>
  );
};

export default Portfolio;
