import { useState } from 'react';
import LoginPage from './LoginPage.jsx';
import PropTypes from 'prop-types';
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

withRouting.propTypes = {
  onRouteChange: PropTypes.func.isRequired
};

export default withRouting;
