// components/Header/index.js

import React from 'react';
import './index.css';
import Nav from '../Nav';

function Header() {
  return (
    <header>
      <h1><a href="index.html">Sartre’s List</a></h1>
      <h2>Better-Dressed People</h2>
      <Nav />
    </header>
  );
}

export default Header;
