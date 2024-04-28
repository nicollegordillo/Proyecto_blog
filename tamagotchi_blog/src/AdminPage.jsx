import React from "react";
import "./styles.scss";
import { create, read, update, del } from './images.js';
import CustomNav from "./components/CustomNav.jsx";
import axios from 'axios'; // Importar Axios para hacer solicitudes HTTP

const AdminPage = ({ onRouteChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [posts, setPosts] = useState([]); // Estado para almacenar los posts

  useEffect(() => {
    // Obtener los posts cuando el componente se monta
    fetchPosts();
  }, []); // La lista de dependencias está vacía para que se ejecute solo una vez al montar el componente

  const fetchPosts = async () => {
    try {
      // Hacer una solicitud GET para obtener los posts
      const response = await axios.get('https://tiburoncin.lat/22246/posts');
      setPosts(response.data); // Actualizar el estado con los posts obtenidos
    } catch (error) {
      console.error('Error al obtener los posts:', error);
    }
  };

  const handleLogout = () => {
    // Perform logout logic
    onRouteChange('login');
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'create':
        return <div>Contenido de la opción Create</div>;
      case 'read':
        return (
          <div>
            <h2>Posts</h2>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Content</th>
                </tr>
              </thead>
              <tbody>
                {posts.map(post => (
                  <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'update':
        return <div>Contenido de la opción Update</div>;
      case 'delete':
        return <div>Contenido de la opción Delete</div>;
      default:
        return <div>Selecciona una opción del menú</div>;
    }
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
      handleLogout={handleLogout}
      onOptionSelect={handleOptionSelect}
    />
    <div className="buttonContainer">
        <button className="inputButton" onClick={handleLogout}>Logout</button>
      </div>
   </div>
  );
}

export default AdminPage;
