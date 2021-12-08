import './App.css';
import {Titulo} from "./componentes/titulo"; 
import {Navbar} from "./componentes/navbar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Titulo />
          <Navbar />
      </header>
    </div>
  );
}

export default App;
