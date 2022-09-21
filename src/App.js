import logo from './logo.svg';
import './App.css';
import AvatarJsx from './Components/AvatarJsx';


function App() {
  return (
    <div id="1" className="App-header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AvatarJsx />
        <p className="Titulo" style={{backgroundColor: "red"}}onclick={() => console.assert('click')}>Bienvenidos</p>
        <button>BOTON</button>
      </header>
    </div>
  );
}

export default App;
