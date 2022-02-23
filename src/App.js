import {Routes, Route} from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './context/CartContext'
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <NavBar/>
          </header>
          <section>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Burmeet"/>}/>
              <Route path='/categoria/:productoCategoria' element={<ItemListContainer greeting="Burmeet"/>}/>
              <Route path='/producto/:productoId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='*' element={<div><h1 className='error'>Pagina no encontrada</h1></div>}/>
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
