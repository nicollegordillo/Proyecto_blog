import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import withRouting from './RouterHOC.jsx';

const AppWithRouting = withRouting(App);

ReactDOM.render(<AppWithRouting />, document.getElementById('root'));
