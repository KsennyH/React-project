import Card from './components/card/Card';
import './css/reset.css';
import './css/base.css';
import './css/main.css';
import { cards } from './data/cards';
import Header from './components/header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className='products'>
        <div className='products__title'>
          <h2 className='title'>Телескопы</h2>
        </div>
        <ul className='products__list'>
          {cards.map((el) => {
            return (
              <li className='products__item'>
                <Card id={el.id} title={el.title} img={el.img} reserve={el.reserve} price={el.price} feedback={el.feedback} />
              </li>
            )
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
