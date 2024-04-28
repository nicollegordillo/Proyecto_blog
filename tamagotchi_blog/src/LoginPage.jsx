// LoginPage.js
import React from 'react';

const LoginPage = ({ onRouteChange }) => {
  const handleLogin = () => {
    // Perform authentication logic
    onRouteChange('admin');
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        Login
      </div>
      <div className="inputContainer">
        <input className="inputBox" type="text" placeholder="Enter your email" />
        <input className="inputBox" type="password" placeholder="Enter your password" />
        <button className="inputButton" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
