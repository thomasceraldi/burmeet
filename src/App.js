import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <section>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Burmeet"/>}/>
          <Route path='/categoria/:productoCategoria' element={<ItemListContainer greeting="Burmeet"/>}/>
          <Route path='/producto/:productoId' element={<ItemDetailContainer />}/>
          <Route path='*' element={<div><h1 className='error'>Pagina no encontrada</h1></div>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
