import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Cabecalho from "./components/Header";
import MusicasFavoritas from "./components/FavoriteSongs";
import ArtistasFavoritos from "./components/FavoriteArtists";
import AlbunsFavoritos from "./components/FavoriteAlbums";
import PaginaInicial from "./components/PaginaInicial";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Routes>
        {/* Redireciona a raiz para /paginainicial */}
        <Route path="/" element={<Navigate to="/paginainicial" />} />
        <Route path="/paginainicial" element={<PaginaInicial />} />
        <Route path="/musicas" element={<MusicasFavoritas />} />
        <Route path="/artistas" element={<ArtistasFavoritos />} />
        <Route path="/albuns" element={<AlbunsFavoritos />} />
      </Routes>
    </Router>
  );
}

export default App;
