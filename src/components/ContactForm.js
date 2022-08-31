import React, { useState, useEffect } from "react";


function ContactForm() {

    const [status, setStatus] = useState("Wyślij");
    const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Wysyłanie...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
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

    return(

        <>
        <form onSubmit={handleSubmit} className="contact-form">
            <label className="contact-form_name">
                <div>Wpisz swoje imię</div>
                <input type="text" id="name" required placeholder="Krzysztof" />
            
                <div>Wpisz swój email</div>
                <input type="email" id="email" required placeholder="abc@xyz.pl"/>
            </label>
            <label className="contact-form_message">
                Wpisz swoją wiadomość
                <textarea type="text" id='message' rows="4" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            </label>
            <button className="contact-form_send">{status}</button>
        </form>
        
        </>
    )

}

export default ContactForm;