import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={<Home />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
