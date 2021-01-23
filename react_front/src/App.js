import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/login" component={Login} />
        <Route exact path="/users/registro" component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
