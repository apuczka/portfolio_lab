import { useState } from "react";
import {  Link, Routes, Route } from "react-router-dom";
import {   animateScroll as scroll } from "react-scroll";



function HomeHeader() {

    return (
        <>
            
            <header className="header">
                <div className="navbar">
                    <nav className="navbar_sign">
                        <Link className='navbar_sign-links' to="/signIn">Zaloguj się</Link>
                        <Link className='navbar_sign-links' to="/signUp">Załóż konto</Link>
                    </nav>


                    <nav className="navbar_navigation">
                        <Link className='navbar_navigation-links' to="/">Start</Link>
                        <Link activeClass='active' spy={true} smooth={true} offset={50} duration={500} className='navbar_navigation-links' to="/whatsUp">O co chodzi?</Link>
                        <Link className='navbar_navigation-links' activeClass='active' to="aboutUs" spy={true} smooth={true} offset={100} duration={500}>O nas</Link>
                        <Link className='navbar_navigation-links' to="/fundaction">Fundacje i organizacje</Link>
                        <Link className='navbar_navigation-links' to="/contact">Kontakt</Link>

                    </nav>
                </div>
                <div className="header_content">
                    <div className="header_content-theme">
                        <div>Zacznij pomagać!</div>
                        <div>Oddaj niechciane rzeczy w zaufane ręce</div>
                    
                    </div>
                    <div className="header_content-boxes">
                        <Link to='signIn' className="header_content-boxes-box">ODDAJ RZECZY</Link>
                        <Link to='/signIn' className="header_content-boxes-box">ZORGANIZUJ ZBIÓRKĘ</Link>
                    </div>
                </div>
                <div id='aboutUs'>
                <div name='aboutUs'>Hello</div>
                </div>
            </header>
            
        
        </>
    )
}

export default HomeHeader;