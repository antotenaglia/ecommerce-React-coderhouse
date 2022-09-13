import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
          <div className="App">
              <header className="App-header">
                  <NavBar />
              </header>
              <Routes>
                  <Route path='/' element= {<ItemListContainer/>}/>
                  <Route path='/contact' element= {<div>Contacto</div>}/>
                  <Route path='/category' element= {<ItemListContainer/>}/>
                  <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
                  <Route path='item/:id' element= {<ItemDetailContainer/>}/>
              </Routes>
          </div>
      </BrowserRouter>
    );
}

export default App;

