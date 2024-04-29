import React, { useState } from "react";
import "./styles.scss";
import { create, read, update, del } from './images.js';
import CustomNav from "./components/CustomNav.jsx";
import axios from 'axios';
import CreateItemForm from "./CreateItemForm.jsx"; // Importa el componente del formulario de creación

const AdminPage = ({ onRouteChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleLogout = () => {
    // Perform logout logic
    onRouteChange('login');
  };

  return (
    <div style={{display: 'flex', flexDirection: 'row',alignItems: 'center'}}>
      <CustomNav
        li={[
          ["Create", create],
          ["Read", read],
          ["Update", update],
          ["Delete", del]
        ]}
        handleLogout={handleLogout}
        onOptionSelect={handleOptionSelect}
      />
      <div className="admin-content-container">
        {/* Renderizar el formulario cuando la opción "Create" está seleccionada */}
        {selectedOption === 'Create' && (
          <div style ={{display:'flex',flexDirection: 'column',justifyContent: 'center'}}>
            <CreateItemForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
