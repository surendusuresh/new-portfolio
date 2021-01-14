import React, { Suspense, lazy } from "react";
import Loader from "./Loader";
const Header = lazy(() => import("./Header"));
const Carousel = lazy(() => import("./Carousel"));
const About = lazy(() => import("./About"));
const Portfolio = lazy(() => import("./Portfolio"));
const Certificates = lazy(() => import("./Certificates"));
const Skills = lazy(() => import("./Skills"));
const Footer = lazy(() => import("./Footer"));

const Home = (props) => {
  return (
    <div id="home">
      <Suspense fallback={<Loader />}>
        <Header />
        <Carousel />
        <div id="container" className="container">
          <About />
          <Skills />
          <Portfolio />
          <Certificates />
          <Footer />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
