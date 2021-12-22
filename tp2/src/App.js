import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./componentes/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>  
      </Switch>
    </BrowserRouter>
  );
}

export default App;
