import React, { useState } from 'react';
import useApi from './useApi';

const DeleteItemForm = ({ onDelete }) => {
  const [itemId, setItemId] = useState('');
  const { sendRequest } = useApi();

  const handleChange = (e) => {
    setItemId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendRequest({
        method: 'DELETE',
        url: `/posts/${itemId}` // Endpoint para eliminar el elemento con el ID proporcionado
      });
      onDelete(itemId); // Llama a la función onDelete con el ID del elemento eliminado
      alert('Item deleted successfully');
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Failed to delete item');
    }
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
