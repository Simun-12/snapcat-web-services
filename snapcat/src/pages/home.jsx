import React from "react";

import NavScroll from "../components/organisms/navScroll";
import HeroSection from "../components/organisms/heroSection";
import Gallery from "../components/organisms/gallery";


function Home() {
  return (
    <div className="home">


        <NavScroll />
        <HeroSection />
        <Gallery />


      </div>



  );
}

export default Home;

