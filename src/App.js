import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="app">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>


      {loggedIn ? ( <Dashboard /> ) : ( <Login handleLogin={handleLogin} /> )}
    </div>
  );
};

export default App;
