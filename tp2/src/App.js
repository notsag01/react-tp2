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
import { CarritoContextProvider } from './context/CarritoContext';
import ItemWidgetContainer from './componentes/ItemWidgetContainer';



function App() {
  return (
    <BrowserRouter>
      <Navegador titulo="MI PAGINA"/>
      <Switch>
        <Route path="/cartWidget">
          <CarritoContextProvider>
            <ItemWidgetContainer/>
          </CarritoContextProvider>
        </Route>       
        <Route path="/categoria/:catId">
          <ItemContainer/>
        </Route>
        <Route path="/producto/:itemId">
          <CarritoContextProvider>
            <ItemDetailContainer/>
          </CarritoContextProvider>
        </Route>
        <Route exact path="/">
          <ItemContainer/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
  
   
  
}

export default App;
