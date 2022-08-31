import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer greeting="¡BIENVENIDO!"/>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;

