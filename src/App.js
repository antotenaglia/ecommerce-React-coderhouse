import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContext } from './context/CartContext';

function App() {
    return (
    <CartContext.Provider value={[]}>
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <NavBar />
                </header>
                <Routes>
                    <Route path='/' element= {<ItemListContainer/>}/>
                    <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
                    <Route path='item/:id' element= {<ItemDetailContainer/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    </CartContext.Provider>
    );
}

export default App;

