import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import RouterHOC from './RouterHOC.jsx';

const AppWithRouting = RouterHOC(App);

ReactDOM.createRoot(document.getElementById('root')).render(<AppWithRouting />);
