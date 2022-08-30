function SignForm() {

    return (

        <form className="sign_form">
            <label className="form_name">
                <div className="form_name-email">Email</div>
                <input type="email" />
            
                <div className="form_name-pass">Hasło</div>
                <input type="password" />
            </label>
        
        </form>

    )
}

export default SignForm;