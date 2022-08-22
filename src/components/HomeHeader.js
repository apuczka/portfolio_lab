import { Routes, Route, Link } from "react-router-dom";
// import hero from '../assets/Home-Hero-Image.jpg';


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
                        <Link className='navbar_navigation-links' to="/whatsUp">O co chodzi?</Link>
                        <Link className='navbar_navigation-links' to="/aboutUs">O nas</Link>
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
                        <div className="header_content-boxes-box">ODDAJ RZECZY</div>
                        <div className="header_content-boxes-box">ZORGANIZUJ ZBIÓRKĘ</div>
                    </div>
                </div>
                
            </header>
            
        
        </>
    )
}

export default HomeHeader;