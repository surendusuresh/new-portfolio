import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import About from "./About";
import Portfolio from "./Portfolio";
import Certificates from "./Certificates";
import Skills from "./Skills";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <div id="home">
      <Header />
      <Carousel />
      <div id="container" className="container">
        <About />
        <Skills />
        <Portfolio />
        <Certificates />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
