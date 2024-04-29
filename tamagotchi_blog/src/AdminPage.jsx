import React, { useState } from "react";
import "./styles.scss";
import { create, read, update, del } from './images.js';
import CustomNav from "./components/CustomNav.jsx";
import axios from 'axios';
import CreateItemForm from "./CreateItemForm.jsx"; // Importa el componente del formulario de creación
import DeleteItemForm from "./DeleteItemForm.jsx";
import UpdateItemForm from "./UpdateItemForm.jsx";
import PostsTable from "./PostsTable.jsx";

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
    <div  style={{display: 'flex', alignItems: 'center'}}>     
        <CustomNav
          li={[
            ["Create", create],
            ["Read", read],
            ["Update", update],
            ["Delete", del]
          ]}
          handleLogout={handleLogout}
          onOptionSelect={handleOptionSelect}
          style={{ alignSelf: 'flex-start' }}
        />
      
      <div className="admin-content-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1' }}>
        {/* Renderizar el formulario cuando la opción "Create" está seleccionada */}
        {selectedOption === 'Create' && (
          <div>
            <CreateItemForm />
          </div>
        )}
        {selectedOption === 'Delete' && (
          <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <DeleteItemForm  style={{ justifyContent: 'center !important' }} />
          </div>
        )}
        {selectedOption === 'Update' && (
          <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <UpdateItemForm  style={{ justifyContent: 'center !important' }} />
          </div>
        )}
        {selectedOption === 'Read' && (
          <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <PostsTable readOptionSelected={selectedOption} style={{ justifyContent: 'center !important' }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
