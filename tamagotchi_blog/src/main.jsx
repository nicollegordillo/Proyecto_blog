import { createRoot } from 'react-dom';
import App from './App.jsx';
import './index.css';
import withRouting from './RouterHOC.jsx';

const AppWithRouting = withRouting(App);

const root = createRoot(document.getElementById('root'));

root.render(<AppWithRouting />);
