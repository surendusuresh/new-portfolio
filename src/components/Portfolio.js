import React from "react";
import CardItem from "./CardItem";

const Portfolio = () => {

  return (
    <div className="content anchor content__portfolio" id="portfolio">
      <h2 className="content__header">Portfolio</h2>
      <div className="portfolio-cards">
        <CardItem
          imgURL="https://firebasestorage.googleapis.com/v0/b/new-portfolio-3502a.appspot.com/o/images%2Fgallery%2Farchitect-site.png?alt=media&token=a8f0da59-1854-4af5-8ca8-233a197fd48d"
          title="Architect Firm Portfolio Website"
          desc="Website created using React for an architecture firm"
          siteURL="https://architect-site.herokuapp.com/"
          imgAlt="Architect website with React"
        />
        <CardItem
          imgURL="https://firebasestorage.googleapis.com/v0/b/new-portfolio-3502a.appspot.com/o/images%2Fgallery%2Fshopper.PNG?alt=media&token=d91edb7e-264e-4293-a7cf-602204988d4e"
          title="eCommerce Web Application"
          desc="Created using MERN stack which has payment gateway integration"
          siteURL="https://ssuresh-ecommerce-front.herokuapp.com/"
          imgAlt="eCommerce website with MERN stack"
        />        
        <CardItem
          imgURL="https://firebasestorage.googleapis.com/v0/b/new-portfolio-3502a.appspot.com/o/images%2Fgallery%2Fexpensemanager_login.PNG?alt=media&token=586880a9-08ed-462b-94cf-3993bd463b58"
          title="Expense Manager App"
          desc="Created using React and Firebase to track the expenses incurred"
          siteURL="https://react-expensify-ssuresh.herokuapp.com/"
          imgAlt="Expense tracker with React"
        />
      </div>
    </div>
  );
};

export default Portfolio;
