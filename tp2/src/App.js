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
import Formulario from './componentes/Formulario'



function App() {
  return (
    <CarritoContextProvider>
    <BrowserRouter>
      <Navegador titulo="MI PAGINA"/>
      <Switch>
        <Route path="/formulario">          
          <Formulario/>          
        </Route>       
        <Route path="/cartWidget">          
          <ItemWidgetContainer/>          
        </Route>       
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
    </CarritoContextProvider>
  )
  
   
  
}

export default App;
