// AdminPage.js
import React from 'react';

const AdminPage = ({ onRouteChange }) => {
  const handleLogout = () => {
    // Perform logout logic
    onRouteChange('login');
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        Admin Page
      </div>
      <div className="buttonContainer">
        <button className="inputButton" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default AdminPage;

