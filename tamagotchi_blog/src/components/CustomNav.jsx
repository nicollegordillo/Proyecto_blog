import { useState } from "react";
import { menu } from '../images';
import PropTypes from 'prop-types';

const CustomNav = ({ li, handleLogout, onOptionSelect }) => {
  const [window, setWindow] = useState(false);

  const openClose = () => {
    setWindow(!window); // Alternar entre true y false al hacer clic en el botón
  };

  const handleOptionClick = (option) => {
    onOptionSelect(option); // Llamar a la función onOptionSelect con la opción seleccionada
    setWindow(false); // Cerrar el menú después de seleccionar una opción
  };

  return (
    <nav className="navbar-menu" style={{ width: window ? 250 : 60 }}>
      <div className="burger" onClick={openClose}>
        <img style={{ width: '50px', height: '50px' }} src={menu} alt="burger" />
      </div>
      <ul className="navbar__list">
        {li.map((item, i) => (
          <div className="navbar__li-box"  key={i} onClick={() => handleOptionClick(item[0])}>
            <img
              src={item[1]}
              alt={item[1]}
              style={{ width: '50px', height: '50px', paddingLeft: window ? 27 : 5 }}
            />
            <li
              className="navbar__li"
              style={{ verticalAlign: 'middle', display: window ? "inline-block" : "none" }}
            >
              {item[0]}
            </li>
          </div>
        ))}
        <div  style={{marginTop:'30px',marginLeft:'30px', display: window ? "inline-block" : "none", textAlign: 'center' }}>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </ul>
    </nav>
  );
};

CustomNav.propTypes = {
  li: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node]))).isRequired,
  handleLogout: PropTypes.func.isRequired,
  onOptionSelect: PropTypes.func.isRequired
};

export default CustomNav;
