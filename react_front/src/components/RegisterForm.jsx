import React, {useState} from 'react'

const RegisterForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState({});

    handleSubmit = async () => {
        try{
            const response = await fetch('http://localhost:3000/users/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/JSON'
                }
            });
            const data = response.json();
            console.log("datos que llegan", data);
            if(data.data){
                sessionStorage.setItem('session', JSON.stringify(data.data.token));
                window.location = '/';
            }
        }catch(error){
            console.log(error);
            setErrors({
                errors: {

                },
                error: data.error
            })
        }
    }

    return(
        <>
            <form className="form register_form" onSubmit={handleSubmit}>
                <h3>Presupuesto personal | Registro</h3>
                {errors.error && <p style={{color: "red", fontWeight:"bold"}}>{errors.error}</p>}
                <input type="text" name="email" defaultValue={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" defaultValue={password} onChange={e => setPassword(e.target.value)} />
                <button>Registrarse</button>
            </form>
        </>
    )
}

export default RegisterForm;