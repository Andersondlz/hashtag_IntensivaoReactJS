import "./App.css";
import Categorias from "./components/categorias.jsx";
import Cards from "./components/cards.jsx";
import Banner from "./components/banner.jsx";
import { useState } from "react";

function App() {
  const [numCategoriaSelecionada, setNumCategoriaSelecionada] = useState(0);

  return (
    <div className="container">
      <Banner/>     
      <Categorias numCategoriaSelecionada={numCategoriaSelecionada} setNumCategoriaSelecionada={setNumCategoriaSelecionada}/>
      <Cards numCategoriaSelecionada={numCategoriaSelecionada}/>
    </div>
  );
  
}

export default App;