import Card from './components/card/Card';
import './css/reset.css';
import './css/base.css';
import './css/main.css';
import { cards } from './data/cards';
import Header from './components/header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/footer/Footer';
import Catalog from './pages/catalog/Catalog';
import Main from './pages/main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/catalog' element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
