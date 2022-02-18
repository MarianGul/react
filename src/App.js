import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { Footer } from './components/Footer/Footer';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from './components/CartContext/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

function App() {


  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer />} />
        <Route path='/productos/:catId' element={ <ItemListContainer />} />
        <Route path='/detail/:itemId' element={ <ItemDetailContainer />} />
        <Route path='/cart' element={ <Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
