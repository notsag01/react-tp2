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
        <Route>
          <ItemContainer/>
        </Route>
      </Switch>


    </BrowserRouter>
  )
  
   
  
}

export default App;
