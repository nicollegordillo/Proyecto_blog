import React from 'react';
import useApi from './useApi.jsx';

// Hook personalizado para manejar el estado del formulario
const useForm = (initialState) => {
  const [formData, setFormData] = React.useState(initialState);
  const { sendRequest } = useApi();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realizar la solicitud POST a la API con los datos del formulario
      await sendRequest({
        method: 'POST',
        url: '/posts', // Endpoint para crear un nuevo elemento
        data: formData
      });
      // Limpia el formulario después de enviar la solicitud
      setFormData(initialState);
      //setAviso('Item agregado correctamente');
      alert('Item created successfully'); // Muestra una alerta de éxito
    } catch (error) {
      console.error('Error creating item:', error);
      //alert('Failed to create item'); // Muestra una alerta de error
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit
  };
};

// Componente de formulario que utiliza el hook useForm
const CreateItemForm = () => {
  // Estado inicial del formulario
 // const [aviso, setAviso] = useState('');
  const initialState = {
    name: '',
    description: '',
    price: '',
    category: '',
    image: ''
  };

  // Función de envío del formulario
  //const onSubmit = (data) => {
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a una API
    //console.log('Form submitted with data:', data);
  //};

  // Usar el hook useForm
  const { formData, handleChange, handleSubmit } = useForm(initialState);

  return (
    <form style={{width:'100%', height:'100%', justifyContent: 'center', alignItems: 'center'}} onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          className="inputBox"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          className="inputBox"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price: </label>
        <input
          className="inputBox"
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Category: </label>
        <input
          className="inputBox"
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Image: </label>
        <input
          className="inputBox"
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>
      {/* Resto de campos del formulario */}
      <button className="inputButton" type="submit">Create Item</button>
    </form>
  );
};

export default CreateItemForm;
