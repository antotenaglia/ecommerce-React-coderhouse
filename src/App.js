import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Greeting from './components/Greeting/Greeting';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const stock = 5; 
    const inicial = 1;
    return (
    <BrowserRouter> 
        <Routes>  
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='contact' element= {<div>contacto</div>}/>
            <Route path='detail/:id' element= {<ItemDetailContainer/>}/>
              <div className="App">
                  <header className="App-header">
                    <NavBar />
                  </header>
                  <Greeting greeting= "¡BIENVENIDO A STICKERZONE!"/>
                  <ItemListContainer/>
                  <ItemCount stock= {stock} inicial= {inicial}/>
              </div>
        </Routes>
    </BrowserRouter>
    );
}

export default App;

