import React from "react";
import News from "../../components/News/News";
import Footer from "../../components/Footer/Footer";
import AboutHero from "../../components/AboutHero/AboutHero";
import Experience from "../../components/Experience/Experience";

function About() {
  return (
    <div>
      <AboutHero/>
      <Experience/>
      <News/>
      <Footer/>
    </div>
  );
}

export default About;
