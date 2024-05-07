import { createRoot } from 'react-dom';
import AppWithRouting from './AppWithRouting.jsx'; // Importas AppWithRouting desde el archivo donde lo definiste
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(<AppWithRouting />);
