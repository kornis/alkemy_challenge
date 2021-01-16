import React from 'react'

const LoginForm = () => {
    return(
        <>
            <form className="login_form">
                <input type="text" name="user" />
                <input type="password" name="password" />
                <button>Iniciar sesión</button>
            </form>
        </>
    )
}

export default LoginForm;