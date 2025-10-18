import "./App.css";
import Categorias from "./components/categorias.jsx";
import Cards from "./components/cards.jsx";
import Banner from "./components/banner.jsx";

function App() {

  return (
    <div className="container">
      <Banner/>     
      <Categorias/>
      <Cards/>
    </div>
  );
  
}

export default App;