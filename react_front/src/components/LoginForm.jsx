import React ,{useState} from 'react'
import { Link } from 'react-router-dom';


const LoginForm = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState({});


const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
        email,
        password
    }
    const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'Application/json'
        }
    });
    const data = await response.json();
     if (data.data) {
        sessionStorage.setItem('session',JSON.stringify(data.data.session.token));
        window.location = '/';
        
    }else{
        
        setErrors({
            errors: {
                ...data.errors
            } 
        })
    } 
    

}
    return(
       
        <div className="form_container">
            <h3>Presupuesto personal | Login</h3>
            <form className="form login_form"  onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Ingrese email" defaultValue={email} onChange={e => setEmail(e.target.value)} />
                <p className="formError"><small>{errors.errors && errors.errors.email ? errors.errors.email.msg : ""}</small></p>
                <input type="password" name="password" placeholder="Contraseña" defaultValue={password} onChange={e => setPassword(e.target.value)} />
                <p className="formError"><small >{errors.errors && errors.errors.password ? errors.errors.password.msg : ""}</small></p>
                <input type="submit" value="Iniciar sesión" />
            </form>
            <p>No tenes cuenta? <Link to="/users/registro"> Registrate acá </Link></p>
        </div>
    )
}

export default LoginForm;