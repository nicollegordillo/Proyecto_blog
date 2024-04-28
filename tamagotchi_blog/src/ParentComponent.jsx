import React, { useState } from 'react';
import LoginPage from './LoginPage';

const ParentComponent = () => {
  const [route, setRoute] = useState('home');

  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
  };

  return (
    <div>
      {route === 'login' && <LoginPage onRouteChange={handleRouteChange} />}
      {/* Render other components based on the route */}
    </div>
  );
};

export default ParentComponent;

