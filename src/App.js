import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Greeting from './components/Greeting/Greeting';

function App() {
    const stock = 5; 
    const inicial = 1;
    const onAddActive = (items) => {alert (`Agregaste ${items} producto/s al carrito`)};
    return (
      <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
          <Greeting greeting= "¡BIENVENIDO A STICKERZONE!"/>
          <ItemListContainer/>
          <ItemCount stock= {stock} inicial= {inicial} onAdd= {onAddActive}/>
      </div>
    );
}

export default App;

