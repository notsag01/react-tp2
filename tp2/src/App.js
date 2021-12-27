import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Navegador from "./componentes/Navegador"
import ItemContainer from "./componentes/ItemContainer"



function App() {
  return (
    <BrowserRouter>
      <Navegador titulo="MI PAGINA"/>
      <Switch>
        <Route exact path="/">
          <ItemContainer/>
        </Route>
        <Route path="/categoria/:catId">
          <ItemContainer/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
  
   
  
}

export default App;
