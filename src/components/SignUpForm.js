function SignUpForm() {

    return (

        <form className="sign_form signUp">
            <label className="form_name signUp_name">
                <div className="form_name-email">Email</div>
                <input type="email" />
            
                <div className="form_name-pass">Hasło</div>
                <input type="password" />

                <div className="form_name-pass-repeat">Powtóraz hasło</div>
                <input type="password" />

            </label>
        
        </form>

    )
}

export default SignUpForm;