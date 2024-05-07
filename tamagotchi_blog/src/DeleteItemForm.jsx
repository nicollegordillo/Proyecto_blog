import { useState } from 'react';
import useApi from './useApi';
import PropTypes from 'prop-types';

const DeleteItemForm = ({ onDelete }) => {
  const [itemId, setItemId] = useState('');
  const { sendRequest } = useApi();
  //const aviso ='';
  const [aviso, setAviso] = useState('');

  const handleChange = (e) => {
    setItemId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //aviso='Revisa el Read para verificar que se borró correctamente';
    try {
      const response = await sendRequest({
        method: 'DELETE',
        url: `/posts/${itemId}`
     //   data: {itemId} // Endpoint para eliminar el elemento con el ID proporcionado
      });
      console.log(response);
      if (response.status === 204) {
        // Item successfully deleted
        onDelete(itemId); // Llama a la función onDelete con el ID del elemento eliminado
      //  alert('Item deleted successfully');
      } else {
        // Unexpected response status
        console.error('Unexpected response status:', response.status);
        //alert('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      //alert('Failed to delete item');
    }
    setAviso('Revisa el Read para verificar que se borró correctamente');
    //aviso='Revisa el Read para verificar que se borró correctamente';
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
      {aviso && <div className="errorMessage">{aviso}</div>}
    </form>
  );
};

DeleteItemForm.propTypes = {
  onDelete: PropTypes.func.isRequired
};

export default DeleteItemForm;
