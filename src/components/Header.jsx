import React from 'react';
import { Link } from 'react-router-dom';
import logoFernandofy from '../assets/logo/Fernandofy.jpg';
import "../styles/Home.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logoFernandofy} alt="Logo do Fernandofy" className='logo' />
      
      <Link to="/">
        <h1>Fernandofy  </h1>
      </Link>

      <div className="nav-buttons">
        <Link to="/artistas">
          <button className="nav-button">Artistas</button>
        </Link>
        <Link to="/albuns">
          <button className="nav-button">Álbuns</button>
        </Link>
        <Link to="/musicas">
          <button className="nav-button">Músicas</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;


