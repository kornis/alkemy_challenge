import React from 'react';

function Header() {
   const handleSession = () => {
        sessionStorage.removeItem('session');
        window.location = '/users/login';
    }
    const userData = JSON.parse(sessionStorage.getItem('session'));
    return (
        <>
            <header className="container-fluid">
            <div className="row ">
                <div className="col-4 offset-4">
                    <h1>Presupuesto Personal</h1>
                    </div>
                    <div className="col-4 session-info">
                    <p>Bienvenido { userData.user.email }</p>
                    <button className="btn btn-primary" onClick={handleSession}>Cerrar sesion</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;