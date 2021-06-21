import React from "react";
import CardItem from "./CardItem";

const Portfolio = () => {
  return (
    <div className="content anchor content__portfolio" id="portfolio">
      <h2 className="content__header">Portfolio</h2>
      <div className="portfolio-cards">
        <CardItem
          imgURL="https://firebasestorage.googleapis.com/v0/b/new-portfolio-3502a.appspot.com/o/images%2Fgallery%2Famazon-clone.JPG?alt=media&token=ea399bdb-70ec-4d05-bfe1-5b464a4886d1"
          title="Amazon Clone App"
          desc="Created with Stripe integration for payment processing"
          siteURL="https://clone-be2e2.web.app/"
          imgAlt="Amazon Clone App"
        />
        <CardItem
          imgURL="https://firebasestorage.googleapis.com/v0/b/new-portfolio-3502a.appspot.com/o/images%2Fgallery%2Farchitect-site.png?alt=media&token=a8f0da59-1854-4af5-8ca8-233a197fd48d"
          title="Architect Firm Portfolio Website"
          desc="Website created using React for an architecture firm"
          siteURL="https://architect-site.herokuapp.com/"
          imgAlt="Architect website with React"
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
