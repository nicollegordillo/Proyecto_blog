import React, { useState } from 'react';
//import withRouting from './RouterHOC.jsx'; // Import the withRouting HOC

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
      
      console.log(username);
      console.log(JSON.stringify({ username, password }));
      console.log(password);

      // Check if the request was successful
      if (response.ok) {
        const { token } = await response.json();
        
        // Save token to local storage
        localStorage.setItem('token', token);

        //const [route, setRoute] = useState('login');// Perform successful login actions
        onRouteChange('admin');
        console.log("Enter");
      } else {
        // Handle login failure
        setError('Invalid username or password');
      }
    } catch (error) {
      // Handle network errors
      console.log(error);
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
