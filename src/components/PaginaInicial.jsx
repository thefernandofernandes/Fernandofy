import React from "react";
import { Link } from "react-router-dom";
import "../styles/PaginaInicial.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Banner principal */}
      
          <h1>Bem-vindo ao Fernandofy</h1>
          <p>Explore minhas músicas, artistas e álbuns favoritos!</p>
          <Link to="/musicas" className="explore-button">Explorar Agora</Link>
       

      {/* Seção de Destaques */}
      <div className="highlights">
        <h2>Destaques</h2>
        <div className="cards-container">
          <div className="card">
            <iframe src="https://open.spotify.com/embed/playlist/0fFYeUikkVi6FOLOFZ0nIm" allowFullScreen></iframe>
            <p>Minhas Músicas Favoritas</p>
            <Link to="/musicas" className="card-button">Ver Mais</Link>
          </div>
          <div className="card">
            <iframe src="https://open.spotify.com/embed/artist/2YZyLoL8WfxfXXf0hWnV6D" allowFullScreen></iframe>
            <p>Kendrick Lamar - Um dos Meus Favoritos</p>
            <Link to="/artistas" className="card-button">Ver Artistas</Link>
          </div>
          <div className="card">
            <iframe src="https://open.spotify.com/embed/album/2ANVost0y2y52ema1E9xAZ" allowFullScreen></iframe>
            <p>Thriller - Um Clássico!</p>
            <Link to="/albuns" className="card-button">Ver Álbuns</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
