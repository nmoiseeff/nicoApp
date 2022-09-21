import logo from './logo.svg';
import './App.css';
import AvatarJsx from './Components/AvatarJsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AvatarJsx />
        <h1> Bienvenidos</h1>
        <button>BOTON</button>
      </header>
    </div>
  );
}

export default App;
