import React from "react";
import "./styles.scss";
import { create, read, update, del } from './images.js';
import CustomNav from "./components/CustomNav.jsx";

const AdminPage = ({ onRouteChange }) => {
  const handleLogout = () => {
    // Perform logout logic
    onRouteChange('login');
  };


  return (
   <div>
    <CustomNav
      li={[
        ["Create", create],
        ["Read", read],
        ["Update", update],
        ["Delete", del]
      ]}
    />
    <div className="buttonContainer">
        <button className="inputButton" onClick={handleLogout}>Logout</button>
      </div>
   </div>
  );
}

export default AdminPage;
