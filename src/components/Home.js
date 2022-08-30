import { Routes, Route, Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import WhatsUp from "./WhatsUp";
import AboutUs from "./AboutUs";
import Fundaction from "./Fundaction";
import Contact from "./Contact";

function Home() {
    return (
      <>
        <HomeHeader />
        <HomeThreeColumns />
        <WhatsUp />
        <AboutUs />
        <Fundaction />
        <Contact />

      </>
    );
  }

  export default Home;