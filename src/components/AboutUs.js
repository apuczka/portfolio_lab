// import { Routes, Route, Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import signature from '../assets/Signature.svg';


function AboutUs() {
    return (
      <>
        <section name='aboutUs' className="container_aboutUs">
          <div className="container_aboutUs_desc">
            <div className="container_aboutUs_desc_text">O nas</div>
            <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            <img src={signature} alt='signature' />
          </div>
          <div className="container_aboutUs_pic"></div>



        </section>
        
      </>
    );
  }

  export default AboutUs;