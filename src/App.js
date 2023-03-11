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


function App() {
  return (
    <div className="App">
      <Main />
      {/*<Catalog />*/}
    </div>
  );
}

export default App;
