import Card from './components/card/Card';
import './css/reset.css';
import './css/base.css';
import './css/main.css';
import { cards } from './data/cards';


function App() {
  return (
    <div className="App">
      <div className='products'>
        <div className='products__title'>
          <h2 className='title'>Телескопы</h2>
        </div>
        <ul className='products__list'>
          {cards.map((el) => {
            return (
              <li className='products__item'>
                <Card title={el.title} img={el.img} reserve={el.reserve} price={el.price} feedback={el.feedback} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
