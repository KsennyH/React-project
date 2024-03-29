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
import Payment from './pages/payment/Payment';
import ScrollToTop from './utils/scrollToTop';
import Product from './pages/product/Product';
import Sale from './pages/sale/Sale';
import SaleLineCard from './pages/sale-line-card/SaleLineCard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/payment' element={<Payment />} />
          {/*<Route path='/sale' element={<Sale />} />*/}
          <Route path='/sale2' element={<SaleLineCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
