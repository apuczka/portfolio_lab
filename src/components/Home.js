import { Routes, Route, Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";


function Home() {
    return (
      <>
        <HomeHeader />
        <HomeThreeColumns />
        
      </>
    );
  }

  export default Home;