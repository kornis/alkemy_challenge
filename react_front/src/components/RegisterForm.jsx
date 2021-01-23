import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const RegisterForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState({});

   const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
        email: email,
        password: password
    }
        try{
            const response = await fetch('http://localhost:3000/users/register',{
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'Application/JSON'
                }
            });
            const data = await response.json();
            if(data.token){
                let session = {
                    session:{
                        token: data.token
                    }, 
                    user: {
                        user_id: data.data.id,
                        email: data.data.email
                    }
                }
                sessionStorage.setItem('session', JSON.stringify(session));
               window.location = '/';
            }else{
                setErrors({ 
                    errors: {
                        ...data.errors
                    },
                    error: data.error 
                })
            }
        }catch(error){
            setErrors({
                errors: {

                },
                error: error
            })
        }
    }

    return(
        <>
        <div className="form_container">
            <form className="form register_form" onSubmit={e => handleSubmit(e)}>
                <h3>Presupuesto personal | Registro</h3>
                {errors.error && <p style={{color: "red", fontWeight:"bold"}}>{errors.error}</p>}
                <input type="text" name="email" placeholder="Ingrese email" defaultValue={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" placeholder="Contraseña" defaultValue={password} onChange={e => setPassword(e.target.value)} />
                <input type="submit" value="Registrarse" />
            </form>
            <p>Ya tenes cuenta? <Link to="/users/login"> Iniciá sesión </Link></p>
            </div>
        </>
    )
}

export default RegisterForm;