import React, { useState } from 'react';
import App from './App';
import LoginPage from './LoginPage.jsx';
import AdminPage from './AdminPage.jsx';

const withRouting = (WrappedComponent) => {
console.log("HOC de enrutamiento renderizado con:", WrappedComponent);  
const RoutedComponent = () => {
    const [route, setRoute] = useState('home'); // Inicialmente, la ruta es 'home'
   //console.log("onRouteChange recibido en el HOC:", onRouteChange);
    const handleRouteChange = (newRoute) => {
      setRoute(newRoute);
    };

    switch (route) {
      case 'login':
        return <LoginPage onRouteChange={handleRouteChange} />;
      case 'admin':
        return <AdminPage  onRouteChange={handleRouteChange}/>;
      default:
        return <WrappedComponent onRouteChange={handleRouteChange} />;
    }
  };

  return RoutedComponent;
};

export default  withRouting;
