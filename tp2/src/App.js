import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Navegador from "./componentes/Navegador"
import ItemContainer from "./componentes/ItemContainer"
import ItemDetailContainer from "./componentes/DetailContainer"



function App() {
  return (
    <BrowserRouter>
      <Navegador titulo="MI PAGINA"/>
      <Switch>
        <Route path="/categoria/:catId">
          <ItemContainer/>
        </Route>
        <Route path="/producto/:itemId">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/">
          <ItemContainer/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
  
   
  
}

export default App;
