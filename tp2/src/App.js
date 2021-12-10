import './App.css';
import {Titulo} from "./componentes/titulo"; 
import {Navbar} from "./componentes/navbar"
import {NavLat} from "../src/componentes/nav-lat"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Titulo />
          <Navbar />
      </header>
      <main className="Main">
          <NavLat/>
      </main>
    </div>
  );
}

export default App;
