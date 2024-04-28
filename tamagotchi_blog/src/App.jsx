import React, { useState, useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { tinkyWinkyLogo, tamaImage, kuchipatchi } from './images';

const Loading = () => {
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

  return (
    <div className="loader" style={loadingStyle}></div>
  );
};

const Header = () => {
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
    justifyContent: 'center',
    zIndex: 2,
    fontFamily: 'sans-serif'
  };

  const imageStyles = {
    width: '5%',
    marginRight: '10px'
  };

  return (
    <header style={styles}>
      <img src={tinkyWinkyLogo} alt="Tinky Winky Logo" style={imageStyles} />
      <span>Kuchipatchi town</span>
    </header>
  );
};

const Footer = () => {
  const styles = {
    padding: '20px 25px',
    backgroundColor: '#E8A7DD',
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
    position: 'relative',
    zIndex: 0
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
    top: '-30px',
    left: '40px',
    transform: 'translateX(-50%)',
    zIndex: 1
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

const Introduction = () => {
  const containerStyles = {
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '50px',
    color: 'black',
    backgroundColor: 'white',
    width: '60%',
    margin: '0 auto 50px',
    padding: '20px',
    fontFamily: 'sans-serif'
  };

  const imageStyles = {
    width: '35%',
    borderRadius: '10px'
  };

  return (
    <div style={containerStyles}>
      <p>En este blog encontrarás contenido sobre los objetos disponibles en el tamagotchi v5 celebrity.</p>
      <h3>Este blog está inspirado en mi tamagotchi!</h3>
      <img src={tamaImage} alt="Kuchipatchi Town" style={imageStyles} />
    </div>
  );
};

const Posts = () => {
  const styles = {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    setIsLoading(true);
    try {
      const apiResponse = await fetch('https://api.tiburoncin.lat/32246/posts');

      if (!apiResponse.ok) {
        throw new Error(`API call failed with status: ${apiResponse.status}`);
      }

      const jsonPosts = await apiResponse.json();

      if (!Array.isArray(jsonPosts)) {
        throw new Error('Data format is incorrect, expected an array of posts');
      }

      const formattedPosts = jsonPosts.map(({ id, name, description, price, category, image }) => ({
        id,
        name,
        description,
        price,
        category,
        image
      }));

      setPosts(formattedPosts);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else if (posts.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul style={styles}>
      {posts.map(({ id, name, description, price, category, image }) => (
        <Post
          key={id}
          name={name}
          description={description}
          price={price}
          category={category}
          image={image}
        />
      ))}
    </ul>
  );
};

const App = () => {
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
    width:'100%'
  };

  return (
    <main style={styles}>
      <Header />
      <div style={{ flex: 1, width:'100%' }}>
        <Suspense fallback={<Loading />}>
          <Posts />
        </Suspense>
      </div>
      <Introduction />
      <Footer />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


export default App