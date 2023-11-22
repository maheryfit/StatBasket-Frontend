import React from 'react';
import '../params/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">STATS</div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">Equipe</li>
          <li className="nav-item">Joueur</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
