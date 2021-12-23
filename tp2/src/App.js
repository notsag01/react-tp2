import './App.css';
import Header from "./componentes/header/index"
import Navegador from "./componentes/navs/index"
import ItemContainer from "./componentes/body-productos/itemContainer/index"
import { BrowserRouter, Switch, Route, } from "react-router-dom"
import ItemDetailContainer from "./componentes/body-productos/detail/itemDetailContainer"

function App() {
  return (
    <BrowserRouter>
        <Header titulo="MI PAGINA"/>
        <Navegador/>
        <Switch>
          <Route exact path="/">
            <ItemContainer/>
          </Route>
          <Route exact path="/busqueda/:itemId">
            <ItemDetailContainer greeting={`BUSCADOS`}/>
          </Route>
        </Switch>
    </BrowserRouter>  
  );
}

export default App;
