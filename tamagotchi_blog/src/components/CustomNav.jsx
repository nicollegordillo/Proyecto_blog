import React, { useState } from "react";
import { menu } from '../images';

const CustomNav = ({ li, handleLogout }) => {
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };

  return (
    <nav className="navbar-menu" style={{ width: window === false ? 250 : 60 }}>
      <div className="burger" onClick={() => openClose()}>
        <img style={{ width: '50px', height: '50px' }} src={menu} alt="burger" />
      </div>
      <ul className="navbar__list">
        {li.map((item, i) => (
          <div className="navbar__li-box" key={i}>
            <img
              src={item[1]}
              alt={item[1]}
              style={{width:'50px', height: '50px', paddingLeft: window === false ? 27 : 5 }}
            />
            <li
              className="navbar__li"
              style={{verticalAlign: 'middle', display: window === false ? "inline-block" : "none" }}
            >
              {item[0]}
            </li>
          </div>
        ))}
        <div
          
          style={{marginLeft:'30px',textAlign: 'center',marginTop: '30px',lineHeight:'50px', display: window == false ? "inline-block" : "none" }}
        >
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default CustomNav;
