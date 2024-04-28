import React, { useState } from 'react';

const RouterHOC = (Component) => {
  const WrappedComponent = () => {
    const [route, setRoute] = useState(''); // State to track the current route

    const onRouteChange = (newRoute) => {
      setRoute(newRoute);
    };

    // Render the appropriate component based on the current route
    switch (route) {
      case 'login':
        return <LoginPage />;
      case 'admin':
        return <AdminPage />;
      default:
        return <Component onRouteChange={onRouteChange} />;
    }
  };

  return WrappedComponent;
};

export default RouterHOC;

