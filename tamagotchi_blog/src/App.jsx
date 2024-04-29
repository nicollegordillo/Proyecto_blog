import React, { useState, useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { tinkyWinkyLogo, tamaImage, kuchipatchi } from './images';
import './App.css';
import  withRouting from './RouterHOC.jsx';

const Header = ({ goToLoginPage }) => {
  const styles = {
    padding: '20px 25px',
    backgroundColor: '#E8A7DD',
    fontSize: '30px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'black',
    fontWeight: 'bold',
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: '2',
    fontFamily: 'sans-serif',
  };

  const imageStyles = {
    width: '5%',
    marginRight: '10px'
  };
  const buttonStyle = {
    backgroundColor: 'cornflowerblue',
    color: 'white',
    padding: '12px 24px',
    fontSize: '24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '50px'
  };

  return (
    <header style={styles}>
      <div>
        <img src={tinkyWinkyLogo} alt="Tinky Winky Logo" style={imageStyles} />
        <span>Kuchipatchi town</span>
      </div>
      <button style={buttonStyle} onClick={goToLoginPage}>Admin</button>
    </header>
  );
};



  const loadingStyle = {
    color: '#ffffff',
    fontSize: '45px',
    textIndent: '-9999em',
    overflow: 'hidden',
    width: '1em',
    height: '1em',
    borderRadius: '50%',
    position: 'relative',
    transform: 'translateZ(0)',
    animation: 'mltShdSpin 1.7s infinite ease, round 1.7s infinite ease',
    marginTop: '150px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };



const Footer = () => {
  const styles = {
    padding: '20px 25px',
    backgroundColor: '#e8a7dd',
    fontSize: '14px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'black',
    fontWeight: 'bold',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    fontFamily: 'sans-serif'
  };



  return (
    <footer style={styles}>
      Copyright 2024 UVG© - Por Nicolle Gordillo
    </footer>
  );
};

const Post = ({ name, description, price, category, image }) => {
  const containerStyles = {
    background: 'rgba(255, 255, 255)',
    color: 'rgba(40, 55, 71)',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: '20px',
    width: '60%',
    height: 'auto',
    margin: '100px auto 40px',
    position: 'relative', // Make sure the container is positioned relative
    zIndex: '0',
  };

  const divStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  const imageStyles = {
    borderRadius: '10px',
    width: '70%',
    height: '70%',
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'center'
  };

  const categoryStyles = {
    backgroundColor: 'black',
    color: 'white',
    padding: '5px 10px',
    position: 'absolute',
    top: '0px',
    left: '40px',
    transform: 'translateX(-50%)',
    zIndex: '1'
  };

  return (
    <div style={containerStyles}>
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={categoryStyles}>{category}</div>
        <h2>{name}</h2>
        <div style={divStyle}>
          <div style={imageStyles}>
            <img
              src={image}
              alt={name}
              style={{ maxWidth: '50%', maxHeight: 'auto' }}
            />
          </div>
        </div>
        <p>{description}</p>
        <h3>{price} G</h3>
      </div>
    </div>
  );
};

Post.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

const EmptyState = () => {
  const styles = {
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    width: '60%',
    padding: '20px',
    fontFamily: 'sans-serif',
    fontSize: '1.5em',
    margin: '100px auto 0'
  };

  return (
    <div style={styles}>
      <h1>No hay posts para mostrar</h1>
      <p>No hay contenido en este momento :(</p>
    </div>
  );
};

const Posts = () => {
        const styles = {
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }

        const [posts, setPosts] = React.useState([])
        const [isLoading, setIsLoading] = React.useState(true)

        const getPosts = async () => {
          setIsLoading(true)
          try {
            const apiResponse = await fetch(
              'https://api.tiburoncin.lat/32246/posts'
            )

            if (!apiResponse.ok) {
              throw new Error(
                `API call failed with status: ${apiResponse.status}`
              )
            }

            const jsonPosts = await apiResponse.json()

            if (!Array.isArray(jsonPosts)) {
              throw new Error(
                'Data format is incorrect, expected an array of posts'
              )
            }

            const formattedPosts = jsonPosts
              
              .map(
                ({
                  id,
                  name,
                  description,
                  price,
                  category,
                  image
                }) => ({
                  id,
                  name,
                  description,
                  price,
                  category,
                  image
                })
              )
            setPosts(formattedPosts)
          } catch (error) {
            console.error('Failed to fetch posts:', error)
          }
          setIsLoading(false)
        }

        React.useEffect(() => {
          getPosts()
        }, [])

        if (isLoading) {
          return <Loading />
        } else if (posts.length === 0) {
          return <EmptyState />
        }

        return (
          <ul style={styles}>
            {posts.map(
              ({
                id,
                  name,
                  description,
                  price,
                  category,
                  image
              }) => (
                <Post
                  name={name}
                  description={description}
                  price={price}
                  category={category}
                  image={image}
                />
              )
            )}
          </ul>
        )
      }

      const Loading = () => {
  return (
    <div className="loader" style={loadingStyle}></div>
  )
}

const Introduction = () => {
  const containerStyles = {
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '50px',
    color: 'black',
    backgroundColor: 'white', // Fondo blanco
    width: '60%', // Ancho igual al de los posts
    margin: '0 auto 50px', // Centrar horizontalmente
    padding: '20px', // Espaciado interno
fontFamily: 'sans-serif',

  };


  const imageStyles = {
    width: '35%',
    borderRadius: '10px',
  };

  return (
    <div style={containerStyles}>
      <p>
        En este blog encontrarás contenido sobre los objetos disponibles en el tamagotchi v5 celebrity.
      </p>
      <h3>Este blog está inspirado en mi tamagotchi!</h3>
      <img src={tamaImage} alt="Kuchipatchi Town" style={imageStyles} />
    </div>
  );
};

const App = ({ onRouteChange }) => {
        let [route, setRoute] = useState('home'); // Initialize the route state
//console.log("onRouteChange en App:", onRouteChange);
       // Function to change the route
 //       onRouteChange = (newRoute) => {
   //       setRoute(newRoute);
     //   };
        const styles = {
          fontFamily: 'Times New Roman, sans-serif',
          backgroundImage: 'linear-gradient(135deg, #db00b6 25%, transparent 25%), linear-gradient(225deg, #db00b6 25%, transparent 25%), linear-gradient(45deg, #db00b6 25%, transparent 25%), linear-gradient(315deg, #db00b6 25%, #64dfdf 25%)',
          backgroundPosition: '40px 0, 40px 0, 0 0, 0 0',
          backgroundSize: '80px 80px',
          backgroundRepeat: 'repeat',
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          margin: 0,
          padding: 0,
          minHeight: '100vh',
        }
        const divStyle = {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '40px',
        }
        
        let token = localStorage.getItem('token');
        console.log(token);
        // Verificar si el token existe
        if (!token) {
          console.log("No hay token");
          route='login'// No hay token almacenado, redirigir al usuario a la página de inicio de sesión
         // Aquí puedes usar la función onRouteChange o cualquier otra forma de manejar el cambio de ruta
         //onRouteChange('login');
        } else {
          // Si hay un token almacenado, llamar a la ruta '/admin' con el token en el encabezado 'Authorization'
          fetch('https://api.tiburoncin.lat/32246/admin', {
            method: 'POST', // Cambia el método a POST
            headers: {
              'Content-Type': 'application/json' // Indica que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify({ token }) // Envía el token en el cuerpo de la solicitud
          })
          .then(response => {
            if (response.ok) {
              route='admin'// El token es válido, puedes redirigir al usuario a la página de administrador
             // O realizar otras acciones necesarias
            } else {
              route='login'// El token es inválido o ha expirado, maneja el error de acuerdo a tu lógica
            }
          })
          .catch(error => {
            console.error('Error al verificar el token:', error);
          });
        };
        
        const goToLoginPage = () => {
          console.log("Botón Admin clickeado");
          if (route === 'admin') {
            onRouteChange('admin');
          } else {
            onRouteChange('login');
          }
        };
        return (
          <main style={styles}>
            <Header goToLoginPage={goToLoginPage} />
            <div style={{ flex: 1 }}>
              <React.Suspense fallback={<Loading />}>
                <Posts />
              </React.Suspense>
            </div>
            <Introduction />
            <Footer />
          </main>
        );
      };


export default App
