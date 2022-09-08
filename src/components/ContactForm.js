import React, { useState, useEffect } from "react";
// import Form from "./Form";



function ContactForm() {
  
  const initialValues = {name: '', email:'', message:''};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({ });
  const [isSubmit, setIsSubmit] = useState(false);
  const [status, setStatus] = useState("Wyślij");
  
  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormValues({...formValues, [id]: value })
    console.log(formValues)
  }
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    setStatus("Wysyłanie...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:8888/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    setStatus("Wyślij");
    let result = await response.json();
    alert(result.status);
  };

  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length == 0 && isSubmit) {

       console.log(formValues)
    }
  })

  const validate = (values) => {
    const errors = {};
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex2 = /^[A-Za-z]+$/;
    if(!values.name) {
      errors.name = "Podaj swoje imię"
    }else if(!regex2.test(values.name)) {
      errors.name = "Podane imię jest nieprawidłowe!"
    }
    if(!values.email) {
      errors.email = "Podaj swój email!"
    } else if(!regex.test(values.email)) {
      errors.email = "Podany email jest nieprawidłowy!"
    }
    if(values.message.length < 12 ) {
      errors.message = "Wiadomość musi mieć conajmniej 120 znaków!"
    }
    return errors;
  }



    return(

        <>
        
        <form onSubmit={handleSubmit} className="contact-form">
        {Object.keys(formErrors).length == 0 && isSubmit ? (
          <div className="success_message">Wiadomość została wysłana! Wkrótce się skontaktujemy</div> ) : (<div></div>)
        }
        <div className="contact-form2">
          <label className="contact-form_name">

          <div>Wpisz swoje imię</div>
        <input 
          type="text" 
          id="name"  
          placeholder="Krzysztof" 
          value={ formValues.name }
          onChange={handleChange}
          style={{borderBottomColor: formErrors.name ? "red" : "black"}}
        />

            <span className="error_message"> {formErrors.name}</span>
          </label>
          <label className="contact-form_email">


                <div>Wpisz swój email</div>
                <input 
                type="email" 
                id="email" 
                placeholder="abc@xyz.pl" 
                value={ formValues.email }
                onChange={handleChange}
                style={{borderBottomColor: formErrors.email ? "red" : "black"}}
                />
                <span className="error_message"> {formErrors.email}</span>

            </label>
        </div>
            
            
                
            <label className="contact-form_message">
                Wpisz swoją wiadomość
                <textarea 
                type="text" 
                id='message' 
                rows="4" 
                value={ formValues.message }
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                onChange={handleChange}
                style={{borderBottomColor: formErrors.message ? "red" : "black"}}
                />
                <span style={{color: "red"}} >{formErrors.message}</span>

            </label>
            <button disabled={!formErrors} className="contact-form_send">{status}</button>
        </form>
        
        </>
    )

}

export default ContactForm;