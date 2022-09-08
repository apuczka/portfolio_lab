// import MainHeader from './HandOver';
import { Routes, Route, Link } from "react-router-dom";
// import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import WhatsUp from "./WhatsUp";
import AboutUs from "./AboutUs";
import Fundaction from "./Fundaction";
import Contact from "./Contact";
import MainHeader from './MainHeader';


function Main() {
    return (
      <>
         <MainHeader />
        <HomeThreeColumns />
        <WhatsUp />
        <AboutUs />
        <Fundaction />
        <Contact />


      </>
    );
  }

  export default Main;