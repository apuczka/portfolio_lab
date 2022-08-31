
import { Link as RouterLink, Routes, Route } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import ContactForm from "./ContactForm";
import Footer from "./Footer";


function Contact() {


    return (
      <div>
        <div name='contact' className="container_contact">

            <div className="container_contact_text">Skontaktuj się z nami</div>
            <ContactForm />
            <Footer />
        </div>
      
        
      </div>
    );
  }

  export default Contact;