import React, { useState } from 'react';
import App from './App';
import LoginPage from './LoginPage.jsx';

const withRouting = (WrappedComponent) => {
  const RoutedComponent = () => {
    const [route, setRoute] = useState('home'); // Inicialmente, la ruta es 'home'

    const handleRouteChange = (newRoute) => {
      setRoute(newRoute);
    };

    switch (route) {
      case 'login':
        return <LoginPage />;
      default:
        return <WrappedComponent onRouteChange={handleRouteChange} />;
    }
  };

  return RoutedComponent;
};

export default  withRouting;
