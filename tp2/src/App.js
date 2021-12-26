import './App.css';
import Header from "./componentes/header/index"
import Navegador from "./componentes/navs/index"
import ItemContainer from "./componentes/body-productos/itemContainer/index"
import ItemDetailContainer from './componentes/body-productos/detail/containerDetail';
import {BrowserRouter,Switch, Route} from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
        <Header titulo="MI PAGINA"/>
        <Navegador/>
        <Switch>
          <Route exact path="/">
            <ItemContainer/>
          </Route>
          <Route exact path="/categoria/:catId">
            <ItemContainer/>
          </Route>
          <Route exact path="/producto/:prodId">
            <ItemDetailContainer/>
          </Route>
        </Switch>  
    </BrowserRouter>  
  );
}

export default App;
