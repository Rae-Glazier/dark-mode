import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import  useDarkMode  from '../hooks/useDarkMode';


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <Link to = '/'>Crypto Tracker</Link>
      <div>
        <Link to = '/stretch'>Stretch</Link>
      </div>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
