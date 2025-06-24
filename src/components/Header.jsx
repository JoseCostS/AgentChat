// src/components/Header.jsx

import React from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import './Header.css';

function Header({ setMenuAberto }) {
  return (
    <div className="header-container">
      <FaBars className="menu-icon" onClick={setMenuAberto} />
      <div className="user-info">
        <FaUserCircle className="user-icon" />
        <span className="user-name">USER</span>
      </div>
    </div>
  );
}

export default Header;
