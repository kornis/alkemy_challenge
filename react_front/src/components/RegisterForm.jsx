import React from 'react'

const RegisterForm = () => {
    return(
        <>
            <form className="form register_form">
                <input type="text" name="user" />
                <input type="password" name="password" />
                <button>Registrarse</button>
            </form>
        </>
    )
}

export default RegisterForm;