import Card from './components/card/Card';
import './css/reset.css';
import './css/base.css';
import { cards } from './data/cards';


function App() {
  return (
    <div className="App">
      {cards.map((el) => {
        return (
          <Card title={el.title} img={el.img} reserve={el.reserve} price={el.price} />
        )
      })}
    </div>
  );
}

export default App;
