import React from "react";
import "./App.css";
import imgHashtaurante from "./assets/hashtaurante.webp";
import Categorias from "./components/categorias.jsx";
import Cards from "./components/cards.jsx";

function App() {

  return (
    <div className="container">
      <div className="banner">
        <img src={imgHashtaurante} alt="Banner do Restaurante" />
      </div>
      <Categorias/>
      <div className="cards">
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
      
    </div>
  );
  
}

export default App;