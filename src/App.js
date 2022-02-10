import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer />} />
        <Route path='/productos/:catId' element={ <ItemListContainer />} />
        <Route path='/detail/:itemId' element={ <ItemDetailContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
     
    </BrowserRouter>
    </>
  );
}

export default App;
