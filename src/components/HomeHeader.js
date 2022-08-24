import { useState } from "react";
import { Link as RouterLink, Routes, Route } from "react-router-dom";
import {  Link, animateScroll as scroll } from "react-scroll";



function HomeHeader() {

    return (
        <>
            
            <header className="header">
                <div className="navbar">
                    <nav className="navbar_sign">
                        <RouterLink className='navbar_sign-links' to="/signIn">Zaloguj się</RouterLink>
                        <RouterLink className='navbar_sign-links' to="/signUp">Załóż konto</RouterLink>
                    </nav>


                    <nav className="navbar_navigation">
                        <Link className='navbar_navigation-links' to="/">Start</Link>
                        <Link className='navbar_navigation-links' activeClass='active' spy={true} smooth={true} offset={50} duration={250} to="whatsUp">O co chodzi?</Link>
                        <Link className='navbar_navigation-links' activeClass='active' to="aboutUs" spy={true} smooth={true} offset={0} duration={250}>O nas</Link>
                        <Link className='navbar_navigation-links' activeClass='active' spy={true} smooth={true} offset={0} duration={250}to="fundaction">Fundacje i organizacje</Link>
                        <Link className='navbar_navigation-links' activeClass='active' spy={true} smooth={true} offset={0} duration={500}to="contact">Kontakt</Link>

                    </nav>
                </div>
                <div className="header_content">
                    <div className="header_content-theme">
                        <div>Zacznij pomagać!</div>
                        <div>Oddaj niechciane rzeczy w zaufane ręce</div>
                    
                    </div>
                    <div className="header_content-boxes">
                        <RouterLink to='signIn' className="header_content-boxes-box">ODDAJ RZECZY</RouterLink>
                        <RouterLink to='/signIn' className="header_content-boxes-box">ZORGANIZUJ ZBIÓRKĘ</RouterLink>
                    </div>
                </div>
                
            </header>
            
        
        </>
    )
}

export default HomeHeader;