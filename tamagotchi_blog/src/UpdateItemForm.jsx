import React, { useState } from 'react';

const UpdateItemForm = ({ onUpdate }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData); // Llama a la función onUpdate con los datos del formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Id: </label>
        <input
          className="inputBox"
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </div>
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

export default UpdateItemForm;
