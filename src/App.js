import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import "./scss/App.scss";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import WhatsUp from "./components/WhatsUp";
import Fundaction from "./components/Fundaction";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <WhatsUp />
      <AboutUs />
      <Fundaction />
      <Contact />
    </div>
  );
}



export default App;
