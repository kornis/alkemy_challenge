import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/login" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
