import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  const stock = 5; 
  const inicial = 1;
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer greeting= "¡BIENVENIDO!"/>
      <ItemCount stock= {stock} inicial= {inicial}/>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;

