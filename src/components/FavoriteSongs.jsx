import React from "react";
import "../styles/StyleFavorites.css";

const FavoriteSongs = () => {
  <h1 className="title">Minhas Músicas Favoritas</h1>

  return (
    
    <div className="container">
      
      
        <>
          <iframe 
            style={{ borderRadius: "12px", width: "100%", height: "352px", marginBottom: "20px" }}
            src="https://open.spotify.com/embed/playlist/0fFYeUikkVi6FOLOFZ0nIm?utm_source=generator"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

            <iframe 
            style={{ borderRadius: "12px", width: "100%", height: "352px", marginBottom: "20px" }}
            src="https://open.spotify.com/embed/playlist/3d6JSHUSeI64geBH7SYY2E?si=a8ed9fec352a43eb?utm=source=generator"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <iframe 
            style={{ borderRadius: "12px", width: "100%", height: "352px", marginBottom: "20px" }}
            src="https://open.spotify.com/embed/playlist/28n9noLUxp6j0QBMObYvpb?si=f3f0d88803a54321?utm_source=generator"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

        </>
      
    </div>
  );
};

export default FavoriteSongs;
