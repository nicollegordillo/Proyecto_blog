import React, { useState } from 'react';

const LoginPage = ({ onRouteChange }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Send a POST request to your backend API
      const response = await fetch('https://api.tiburoncin.lat/32246/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Check if the request was successful
      if (response.ok) {
        // Perform successful login actions
        onRouteChange('admin');
      } else {
        // Handle login failure
        setError('Invalid username or password');
      }
    } catch (error) {
      // Handle network errors
      setError('Network error. Please try again later.');
    }
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">Login</div>
      <div className="inputContainer">
        <input
          className="inputBox"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="inputBox"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="inputButton" onClick={handleLogin}>
          Login
        </button>
        {error && <div className="errorMessage">{error}</div>}
      </div>
    </div>
  );
};

export default LoginPage;
