// src/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="Netflix_Symbol_RGB.png" alt="Logo" />
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#tvshows">TV Shows</a></li>
          <li><a href="#movies">Movies</a></li>
          <li><a href="#latest">Latest</a></li>
          <li><a href="#mylist">My List</a></li>
        </ul>
      </nav>
      <div className="header__auth">
        <button className="header__button">Sign In</button>
      </div>
    </header>
  );
};

export default Header;

