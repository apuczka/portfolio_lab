import { useState, useEffect } from "react";
import { Link as RouterLink, Routes, Route } from "react-router-dom";
import {  Link, animateScroll as scroll } from "react-scroll";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link as LinkAuth, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "../firebase";

import HomeHeader from "./HomeHeader";
import SignForm from "./SignForm";
import SignUpForm from "./SignUpForm";

function SignUp() {
    // const initialValues = {email:'', password:'', repeat:'' };
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
  
    //   const { email, password, repeat } = e.target.elements;
    //   let details = {
    //     email: email.value,
    //     password: password.value,
    //     repeat: repeat.value,
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
    //   if(values.repeat.length < 6) {
    //     errors.repeat = "Podane hasło jest za krótkie"
    //   } else if (values.repeat !== values.password) {
    //     errors.repeat = "Podane hasło jest nieprawidłowe"
    //   }
    //   return errors;
    // }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeat, setRepeat] =useState('');
    const [user, loading, error] = useAuthState(auth);
    const [validation, setValidation] = useState("false");
    const history = useNavigate();
    const register = () => {
      if (!email) alert("Wpisz email");
      if (password === repeat) {
      registerWithEmailAndPassword(email, password, repeat);

      } else {
        alert("Hało musi być takie same")
      }
    };
    useEffect(() => {
      const emailOK = email.includes("@");
      const textOK = password.length > 6;
      setValidation(emailOK && textOK);

      if (loading) return;
      if (user) history("/signIn");
    }, [user, loading, setEmail, setPassword]);
  
     
  


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
            <div className="container_whatsUp-theme signIn-text">Załóż konto</div>

            <div className="sign_form signUp">
            <label className="sign_form_name signUp_name">
                <div className="sign_form_name-email">Email</div>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    // style={{borderBottomColor: formErrors.email ? "red" : "black"}}

                     />
                     {/* {!validation && <div className="error_message-log">Wpisz prawidłowy email</div>} */}
                   {/* <div className="error_message-log"> {formErrors.email}</div> */}

            
                <div className="sign_form_name-pass">Hasło</div>
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    id="password"
                    // style={{borderBottomColor: formErrors.password ? "red" : "black"}}
                    />
                  {validation && <div className="error_message-log">Wpisz prawidłowe hasło</div>}

                  {/* <div className="error_message-log"> {formErrors.password}</div> */}


                <div className="sign_form_name-pass-repeat">Powtóraz hasło</div>
                <input 
                    value={repeat}
                    onChange={(e) => setRepeat(e.target.value)} 
                    type="password" 
                    id="repeat"
                    // style={{borderBottomColor: formErrors.repeat ? "red" : "black"}}
                    />
                 {/* <div className="error_message-log">{formErrors.repeat}</div> */}


            </label>
            <div className="button signUp_button">
        <RouterLink to='/signIn' className="button_1">Zaloguj się</RouterLink>
        <button onClick={register} className="button_2"> Załóż konto</button>

        </div>
        
        </div>
        </div>
        
        </section>



    )
}

export default SignUp;