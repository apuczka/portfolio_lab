import { useState, useEffect } from "react";
import { Link as RouterLink, Routes, Route, useNavigate } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import HomeHeader from "./HomeHeader";
// import SignForm from "./SignForm";

export default function SignIn() {

    // const initialValues = {email:'', password:''};
    // const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({ });
    // const [isSubmit, setIsSubmit] = useState(false);
    
    // const handleChange = (e) => {
    //   const {id, value} = e.target;
    //   setFormValues({...formValues, [id]: value })
    // //   console.log(formValues)
    // }
      
    //   const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   setFormErrors(validate(formValues));
    //   setIsSubmit(true);
  
    //   const { email, password } = e.target.elements;
    //   let details = {
    //     email: email.value,
    //     password: password.value,
    //   };
    //   let response = await fetch("http://localhost:8888/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(details),
    //   });
    //   let result = await response.json();
    //   alert(result.status);
    // };
  
    // useEffect(() => {
    //   console.log(formErrors)
    //   if(Object.keys(formErrors).length == 0 && isSubmit) {
  
    //      console.log(formValues)
    //   }
    // })
  
    // const validate = (values) => {
    //   const errors = {};
    //   const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
    //   if(!values.email) {
    //     errors.email = "Podaj swój email!"
    //   } else if(!regex.test(values.email)) {
    //     errors.email = "Podany email jest nieprawidłowy!"
    //   }
    //   if(values.password.length < 6 ) {
    //     errors.password = "Podane hasło jest za krótkie"
    //   }
    //   return errors;
    // }
  

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) navigate("/main");
  }, [user, loading]);
  
  
    
    return(
        <section className="container_whatsUp-signin">
            
                <div className="navbar signin">
                    <nav className="navbar_sign">
                        <RouterLink className='navbar_sign-links' to="/signIn">Zaloguj się</RouterLink>
                        <RouterLink className='navbar_sign-links' to="/signUp">Załóż konto</RouterLink>
                    </nav>


                    <nav className="navbar_navigation">
                        <RouterLink className='navbar_navigation-links' to="/">Start</RouterLink>
                        <Link className='navbar_navigation-links' activeClass='active'  spy={true} smooth={true} offset={50} duration={250} to="whatsUp">O co chodzi?</Link>
                        <Link className='navbar_navigation-links' activeClass='active' to="aboutUs" spy={true} smooth={true} offset={0} duration={250}>O nas</Link>
                        <Link className='navbar_navigation-links' activeClass='active' spy={true} smooth={true} offset={0} duration={250}to="fundaction">Fundacje i organizacje</Link>
                        <Link className='navbar_navigation-links' activeClass='active' spy={true} smooth={true} offset={0} duration={500}to="contact">Kontakt</Link>

                    </nav>
                </div>
                
        <div className="signIn">
            <div className="container_whatsUp-theme signIn-text">Zaloguj się</div>

            {/* <form onSubmit={handleSubmit} className="sign_form"> */}

            <div  className="sign_form">
            <label className="sign_form_name">
                <div className="sign_form_name-email">Email</div>
                <input 
                    value={email}
                    // value={formValues.email}
                    // onChange={handleChange}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"

                    id="email"
                    // style={{borderBottomColor: formErrors.email ? "red" : "black"}}
                    />
                {/* <div className="error_message-log"> {formErrors.email}</div> */}

                <div className="sign_form_name-pass">Hasło</div>
                <input
                    // value={formValues.password}
                    value={password}
                    // onChange={handleChange} 
                    onChange={(e) => setPassword(e.target.value)} 

                    type="password" 
                    id="password"
                    // style={{borderBottomColor: formErrors.password ? "red" : "black"}}
                    />
                {/* <div className="error_message-log"> {formErrors.password}</div> */}


                

            </label>
            <div className="button">
                 <RouterLink to='/signUp' className="button_1">Załóż konto</RouterLink>
                 <button
                  onClick={() => logInWithEmailAndPassword(email, password)}
                  className="button_2"> Zaloguj się</button>

        </div>
        
        </div>


        </div>
        
    
        
        
        
        
        </section>



    )
};