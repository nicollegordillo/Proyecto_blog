import React, { useState } from 'react';

const DeleteItemForm = ({ onDelete }) => {
  const [itemId, setItemId] = useState('');

  const handleChange = (e) => {
    setItemId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onDelete(itemId); // Llama a la función onDelete con el ID del elemento a eliminar
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID: </label>
        <input
          className="inputBox"
          type="text"
          value={itemId}
          onChange={handleChange}
          required
        />
      </div>
      <button className="inputButton" type="submit">Delete Item</button>
    </form>
  );
};

export default DeleteItemForm;
