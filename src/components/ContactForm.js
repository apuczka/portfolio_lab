

function ContactForm() {

    return(

        <>
        <form className="form">
            <label className="form_name">
                <div>Wpisz swoje imię</div>
                <input type="text" placeholder="Krzysztof" />
            
                <div>Wpisz swój email</div>
                <input type="email" placeholder="abc@xyz.pl"/>
            </label>
            <label className="form_message">
                Wpisz swoją wiadomość
                <textarea type="text" rows="4" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            </label>
            <button className="form_send">Wyślij</button>
        </form>
        
        </>
    )

}

export default ContactForm;