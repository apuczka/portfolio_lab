import { useState } from "react";
import { Link as RouterLink, Routes, Route } from "react-router-dom";
import {  Link, animateScroll as scroll } from "react-scroll";

import HomeHeader from "./HomeHeader";
import SignForm from "./SignForm";

function SignIn() {

    return(
        <section className="container_whatsUp-signin">
            
                <div className="navbar signin">
                    <nav className="navbar_sign">
                        <RouterLink className='navbar_sign-links' to="/signIn">Zaloguj się</RouterLink>
                        <RouterLink className='navbar_sign-links' to="/signUp">Załóż konto</RouterLink>
                    </nav>


                    <nav className="navbar_navigation">
                        <RouterLink className='navbar_navigation-links' to="/">Start</RouterLink>
                        <Link className='navbar_navigation-links' activeClass='active' spy={true} smooth={true} offset={50} duration={250} to="whatsUp">O co chodzi?</Link>
                        <Link className='navbar_navigation-links' activeClass='active' to="aboutUs" spy={true} smooth={true} offset={0} duration={250}>O nas</Link>
                        <Link className='navbar_navigation-links' activeClass='active' spy={true} smooth={true} offset={0} duration={250}to="fundaction">Fundacje i organizacje</Link>
                        <Link className='navbar_navigation-links' activeClass='active' spy={true} smooth={true} offset={0} duration={500}to="contact">Kontakt</Link>

                    </nav>
                </div>
                
        <div className="signIn">
            <div className="container_whatsUp-theme signIn-text">Zaloguj się</div>

            <SignForm />

        </div>
        <div className="button">
        <RouterLink to='/signUp' className="button_1">Załóż konto</RouterLink>
        <button className="button_2"> Zaloguj się</button>

        </div>
    
        
        
        
        
        </section>



    )
}

export default SignIn;