import { Link as RouterLink, Routes, Route } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import ContactForm from "./ContactForm";


function Contact() {
    return (
      <>
        <div name='contact' className="container_contact">

            <div className="container_contact_text">Skontaktuj się z nami</div>
            <ContactForm />
          
        </div>
      
        
      </>
    );
  }

  export default Contact;