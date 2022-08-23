import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import "./scss/App.scss";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}



export default App;
