import React from "react";
import Hero from "../../components/Hero/Hero";
import News from "../../components/News/News";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="Home">
      <Hero/>
      <News/>
      <Footer/>
    </div>
  );
}

export default Home;
