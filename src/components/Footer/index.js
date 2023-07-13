// components/Footer/index.js

import React from 'react';
import './index.css';


function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><a href="#">Women’s</a></li>
          <li><a href="#">Men’s</a></li>
          <li><a href="#">On the Street</a></li>
          <li><a href="#">The Catwalk</a></li>
          <li><a href="#">AdWatch</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
      <p>&copy; {new Date().getFullYear()} Your Fashion Blog. All rights reserved.</p>
    </footer>
  );
}

export default Footer;