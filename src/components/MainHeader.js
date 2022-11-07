import { Link as RouterLink, Routes, Route } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";




function MainHeader() {

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);

        } catch (err) {
            console.error(err);
            alert("Coś poszło nie tak");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);

    return (
        <>

            <header className="header">
                <div className="main_navbar">
                    <nav className="navbar_sign logged">
                        <div className='navbar_sign-links'>Cześć {user?.email}</div>
                        <RouterLink className='navbar_sign-links' to="/signIn">Oddaj rzeczy</RouterLink>
                        <RouterLink className='navbar_sign-links' to="/logOut">Wyloguj się</RouterLink>
                    </nav>


                    <nav className="navbar_navigation">
                        <Link className='navbar_navigation-links' to="/" >Start</Link>
                        <Link className='navbar_navigation-links' activeClass='active' spy={true} smooth={true} offset={50} duration={250} to="whatsUp">O co chodzi?</Link>
                        <Link className='navbar_navigation-links' activeClass='active' to="aboutUs" spy={true} smooth={true} offset={0} duration={250}>O nas</Link>
                        <Link className='navbar_navigation-links' activeClass='active' spy={true} smooth={true} offset={0} duration={250} to="fundaction">Fundacje i organizacje</Link>
                        <Link className='navbar_navigation-links' activeClass='active' spy={true} smooth={true} offset={0} duration={500} to="contact">Kontakt</Link>

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

export default MainHeader;