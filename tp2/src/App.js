import './App.css';
import Header from "./componentes/header/index"
import Navegador from "./componentes/navs/index"
import ItemContainer from "./componentes/body-productos/itemContainer/index"

function App() {
  return (
    <div>
        <Header titulo="MI PAGINA"/>
        <Navegador/>
        <ItemContainer/>
    </div>  
  );
}

export default App;
